export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Xin chào! 👋
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Họ và tên: <strong>Ngô Văn Phong</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          MSSV: <strong>2212440</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          Lớp: <strong>CTK46A</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          Môn: <strong>Các công nghệ mới trong PTPM</strong>
        </p>
        <p className="text-lg text-gray-500 mb-6 italic">
          "Tôi là sinh viên đam mê công nghệ và luôn học hỏi để phát triển kỹ năng lập trình."
        </p>
        <div className="bg-blue-100 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            🚀 Đây là project Next.JS đầu tiên của tôi!
          </p>
        </div>
        <div className="bg-green-100 rounded-lg p-4">
          <p className="text-green-800">
            💪 Sở thích: Lập trình, Giải quyết vấn đề, Học tập các công nghệ mới
          </p>
        </div>
      </div>
    </main>
  );
}
