"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
        isDark
          ? "bg-gray-900 border-gray-700 text-yellow-400"
          : "bg-white border-gray-200 text-blue-600 hover:bg-gray-50"
      }`}
    >
      <span>{isDark ? "🌙" : "☀️"}</span>
      <span>{isDark ? "Tối" : "Sáng"}</span>
    </button>
  );
}
