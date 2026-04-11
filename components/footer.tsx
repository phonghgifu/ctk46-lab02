export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <div className="space-y-3 mb-4">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:2212440@sv.dlu.edu.vn"
              className="text-blue-600 hover:underline"
            >
              2212440@sv.dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/ngovanphong
            </a>
          </p>
        </div>
        <p className="border-t pt-4">
          © 2025 — Ngô Văn Phong (2212440) | CTK46 — Các công nghệ mới trong PTPM
        </p>
      </div>
    </footer>
  );
}
