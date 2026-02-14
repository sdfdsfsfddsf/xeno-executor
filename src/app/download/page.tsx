import { Download, Lock, Zap, RefreshCw } from "lucide-react";
import { TrackedDownloadLink } from "@/components/TrackedDownloadLink";

export const metadata = {
  title: "Download - Xeno Executor",
  description: "Get the latest version of Xeno - completely free and keyless.",
};

export default function DownloadPage() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 glow-text text-center">Download Xeno</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-12 text-center">
          Get the latest version of Xeno - completely free and keyless.
        </p>

        {/* Download Card */}
        <div className="gradient-border rounded-xl p-12 card-glow text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Download className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Xeno v1.3.25</h2>
          <p className="text-gray-400 mb-2">Latest stable release</p>
          <p className="text-sm text-gray-500 mb-8">Released: January 08, 2025 | Size: 105.7 MB</p>

          <TrackedDownloadLink
            href="/downloading"
            source="download_page"
            className="download-btn text-black px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-3 mb-6"
          >
            Download for Windows
          </TrackedDownloadLink>

          <p className="text-xs text-gray-500">By downloading, you agree to our terms of service</p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="gradient-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold mb-2">No Keys Required</h3>
            <p className="text-sm text-gray-400">100% keyless system</p>
          </div>

          <div className="gradient-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-400">Instant execution</p>
          </div>

          <div className="gradient-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-bold mb-2">Auto Updates</h3>
            <p className="text-sm text-gray-400">Always up-to-date</p>
          </div>
        </div>

        {/* System Requirements */}
        <div className="gradient-border rounded-xl p-8 card-glow">
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-gray-300">Minimum</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Windows 10 (64-bit)</li>
                <li>Intel Core i3 or equivalent</li>
                <li>4 GB RAM</li>
                <li>100 MB free storage</li>
                <li>.NET Framework 4.8</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-gray-300">Recommended</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Windows 11 (64-bit)</li>
                <li>Intel Core i5 or better</li>
                <li>8 GB RAM or more</li>
                <li>500 MB free storage</li>
                <li>Latest .NET Framework</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
