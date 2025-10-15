'use client';

import { usePopularMovies } from '@/hooks/useMovies';
import MovieList from '@/components/MovieList';
import Link from 'next/link';

export default function MovieSection() {
  // React Query로 데이터 로드
  const { data, isLoading, error } = usePopularMovies(1);
  const movies = data?.results || [];

  // 로딩 상태
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-xl">로딩 중...</div>
      </div>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-500 text-xl">
          영화를 불러오는데 실패했습니다.
        </div>
      </div>
    );
  }

  // 영화 목록
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <p className="font-bold text-2xl mb-10 text-gray-600">
          인기 영화 TOP 20
        </p>
        <Link href="/movies" className="btn btn-outline btn-sm mb-10">
          모든 영화보기 →
        </Link>
      </div>
      <MovieList movies={movies} />
    </>
  );
}
