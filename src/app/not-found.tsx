import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-gray-400 mb-4">404</h2>
          <h3 className="text-2xl font-bold text-gray-600 mb-4">
            페이지를 찾을 수 없습니다
          </h3>
          <p className="text-gray-500 mb-8">
            요청하신 페이지가 존재하지 않습니다.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            🏠 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
