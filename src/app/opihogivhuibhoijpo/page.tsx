"use client";

import { useState, useEffect } from "react";
import { Upload, Lock, Check, File, Trash2, Link, AlertTriangle } from "lucide-react";

const ADMIN_PASSWORD = "Xeno123";
const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB limit for localStorage

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [uploadedFile, setUploadedFile] = useState<{ name: string; url: string; size: string; type: "local" | "url" } | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [fileNameInput, setFileNameInput] = useState("");
  const [sizeError, setSizeError] = useState("");

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }

    // Load existing file info from localStorage
    const savedFile = localStorage.getItem("xenoDownloadFile");
    if (savedFile) {
      setUploadedFile(JSON.parse(savedFile));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSizeError("");

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      setSizeError(`File too large (${formatFileSize(file.size)}). Max size is 4MB. Use the URL option below for larger files.`);
      return;
    }

    const fileInfo = {
      name: file.name,
      url: "",
      size: formatFileSize(file.size),
      type: "local" as const,
    };

    // Store the actual file as base64
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const base64Data = reader.result as string;
        localStorage.setItem("xenoDownloadFileData", base64Data);
        localStorage.setItem("xenoDownloadFileName", file.name);
        fileInfo.url = base64Data;
        localStorage.setItem("xenoDownloadFile", JSON.stringify(fileInfo));
        setUploadedFile(fileInfo);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      } catch (err) {
        setSizeError("Failed to save file. Try using the URL option for larger files.");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    const fileInfo = {
      name: fileNameInput.trim() || "Xeno-Download.exe",
      url: urlInput.trim(),
      size: "External file",
      type: "url" as const,
    };

    localStorage.setItem("xenoDownloadFile", JSON.stringify(fileInfo));
    localStorage.setItem("xenoDownloadFileData", urlInput.trim());
    localStorage.setItem("xenoDownloadFileName", fileInfo.name);
    localStorage.setItem("xenoDownloadType", "url");

    setUploadedFile(fileInfo);
    setUploadSuccess(true);
    setUrlInput("");
    setFileNameInput("");
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  const handleRemoveFile = () => {
    localStorage.removeItem("xenoDownloadFile");
    localStorage.removeItem("xenoDownloadFileData");
    localStorage.removeItem("xenoDownloadFileName");
    localStorage.removeItem("xenoDownloadType");
    setUploadedFile(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Number.parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
  };

  // Password screen
  if (!isAuthenticated) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="gradient-border rounded-xl p-8 card-glow">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-2">Admin Access</h1>
            <p className="text-gray-400 text-center text-sm mb-6">
              Enter password to continue
            </p>

            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-white/30 transition"
              />
              {error && (
                <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full download-btn text-black py-3 rounded-lg font-bold"
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // Admin panel
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-2 glow-text">Admin Panel</h1>
        <p className="text-gray-400 mb-8">Manage your download file</p>

        {/* Current File */}
        <div className="gradient-border rounded-xl p-8 card-glow mb-6">
          <h2 className="text-xl font-bold mb-4">Current Download File</h2>

          {uploadedFile ? (
            <div className="flex items-center justify-between bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  {uploadedFile.type === "url" ? <Link className="w-5 h-5" /> : <File className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-medium">{uploadedFile.name}</p>
                  <p className="text-sm text-gray-400">{uploadedFile.size}</p>
                </div>
              </div>
              <button
                onClick={handleRemoveFile}
                className="p-2 hover:bg-white/10 rounded-lg transition text-red-400"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              <File className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No file uploaded yet</p>
              <p className="text-sm text-gray-500">Upload a file or add a URL below</p>
            </div>
          )}
        </div>

        {/* Option 1: URL Input (Recommended) */}
        <div className="gradient-border rounded-xl p-8 card-glow mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Link className="w-5 h-5 text-green-400" />
            <h2 className="text-xl font-bold">Option 1: External URL</h2>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Recommended</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Paste a direct download link from Google Drive, Dropbox, MediaFire, or any file host. Works for files of any size.
          </p>

          <form onSubmit={handleUrlSubmit} className="space-y-4">
            <input
              type="text"
              value={fileNameInput}
              onChange={(e) => setFileNameInput(e.target.value)}
              placeholder="File name (e.g., Xeno-v1.3.25.exe)"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition"
            />
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Direct download URL (https://...)"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition"
            />
            <button
              type="submit"
              className="w-full download-btn text-black py-3 rounded-lg font-bold"
            >
              Save URL
            </button>
          </form>
        </div>

        {/* Option 2: File Upload (Small files only) */}
        <div className="gradient-border rounded-xl p-8 card-glow mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Upload className="w-5 h-5" />
            <h2 className="text-xl font-bold">Option 2: Direct Upload</h2>
            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Max 4MB</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Upload small files directly. For files larger than 4MB, use the URL option above.
          </p>

          <label className="block">
            <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer hover:border-white/40 transition">
              <Upload className="w-10 h-10 mx-auto mb-3 text-gray-400" />
              <p className="text-gray-400 mb-1">Click to upload</p>
              <p className="text-gray-500 text-sm">Max 4MB</p>
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                accept=".exe,.zip,.rar,.7z,*"
              />
            </div>
          </label>

          {sizeError && (
            <div className="mt-4 flex items-center gap-2 text-yellow-400 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>{sizeError}</span>
            </div>
          )}
        </div>

        {uploadSuccess && (
          <div className="flex items-center justify-center gap-2 text-green-400 mb-6">
            <Check className="w-5 h-5" />
            <span>File saved successfully!</span>
          </div>
        )}

        {/* Info Box */}
        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-200 text-sm">
            <strong>Tip:</strong> For Google Drive, use a direct download link format. For Dropbox, change <code>dl=0</code> to <code>dl=1</code> in the URL.
          </p>
        </div>
      </div>
    </section>
  );
}
