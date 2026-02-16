"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface TrackedDownloadLinkProps {
  href: string;
  source: string;
  children?: React.ReactNode;
  className?: string;
}

export function TrackedDownloadLink({
  href,
  source,
  children,
  className = "download-btn text-black px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-3",
}: TrackedDownloadLinkProps) {
  const handleClick = () => {
    trackEvent("download_button_click", {
      source: source,
      destination: href,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      <Download className="w-5 h-5" />
      {children || "Download Now"}
    </Link>
  );
}
