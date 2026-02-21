"use client";

import { Check, Download } from "lucide-react";
import { trackDownload, trackDownloadStart } from "@/lib/analytics";

// Hardcoded download URL - works for all visitors
const DOWNLOAD_URL = "https://limewire.com/d/HvXnH#Vf2ibOlxGc";
const FILE_NAME = "Xeno Executor";
const FILE_INFO = "Latest Version";

export default function DownloadingPage() {
  const handleDownload = () => {
    // Track the download click
    trackDownload(FILE_NAME, "downloading_page");
    trackDownloadStart(FILE_NAME);

    // Open download URL
    window.open(DOWNLOAD_URL, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-2xl text-center fade-in">
        {/* Checkmark Icon */}
        <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8 border border-white/20">
          <Check className="w-12 h-12" />
        </div>

        <h1 className="text-4xl font-bold mb-4 glow-text">Download Ready!</h1>
        <p className="text-gray-400 text-lg mb-8">
          Your download is ready. Click the button below to start downloading Xeno Executor.
        </p>

        <button
          onClick={handleDownload}
          className="download-btn text-black px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-3"
        >
          <Download className="w-5 h-5" />
          Download Xeno
        </button>

        <p className="text-xs text-gray-500 mt-6">
          File: {FILE_NAME} | {FILE_INFO}
        </p>
      </div>
    </section>
  );
}
