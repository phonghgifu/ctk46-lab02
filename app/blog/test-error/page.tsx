"use client";

export default function TestErrorPage() {
  const handleError = () => {
    // Cố ý gây lỗi - gọi method trên undefined
    const x = undefined as any;
    x.method(); // → TypeError: Cannot read property 'method' of undefined
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">🧪 Test Error Boundary</h1>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
        <p className="text-yellow-800 mb-4">
          <strong>Cách hoạt động của Error Boundary:</strong>
        </p>
        <ul className="text-yellow-800 space-y-2 text-sm">
          <li>1️⃣ Nhấn nút "Gây lỗi" bên dưới</li>
          <li>2️⃣ Một runtime error sẽ xảy ra</li>
          <li>3️⃣ Error boundary (app/blog/error.tsx) sẽ catch lỗi này</li>
          <li>4️⃣ Trang error sẽ hiển thị với nút "Thử lại"</li>
          <li>5️⃣ Navbar và Footer vẫn hiển thị bình thường (không bị crash)</li>
        </ul>
      </div>

      <div className="mb-6">
        <button
          onClick={handleError}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
        >
          ⚠️ Gây lỗi (TypeError)
        </button>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <p className="font-semibold text-blue-900 mb-3">Lỗi sẽ được catch ở:</p>
        <code className="bg-white p-3 rounded block text-sm font-mono text-gray-700">
          app/blog/error.tsx
        </code>
        <p className="text-blue-800 text-sm mt-3">
          Vì page này (/blog/test-error) nằm trong thư mục /blog, 
          nên error sẽ được xử lý bởi blog/error.tsx
        </p>
      </div>
    </div>
  );
}
