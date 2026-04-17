"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Không thể copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
        copied
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
      }`}
    >
      {copied ? "✓ Đã copy!" : label}
    </button>
  );
}
