import AllMovies from '@/components/AllMovies';

export default function MoviesPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      {/* 페이지 제목 */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">모든 영화</h1>
      </div>

      {/* 모든 영화 컴포넌트 - 페이지네이션 포함 */}
      <AllMovies />
    </div>
  );
}
