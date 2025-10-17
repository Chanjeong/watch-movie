'use client';

import { usePopularMovies } from '@/hooks/useMovies';
import MovieList from '@/components/MovieList';
import Link from 'next/link';
import LoadingDisplay from './common/LoadingDisplay';
import ErrorDisplay from './common/ErrorDisplay';

export default function MovieSection() {
  // React Query로 데이터 로드
  const { data, isLoading, error } = usePopularMovies(1);
  const movies = data?.results || [];

  // 로딩 상태
  if (isLoading) {
    return <LoadingDisplay type="skeleton" count={12} />;
  }

  // 에러 상태
  if (error) {
    return (
      <ErrorDisplay
        title="영화를 불러올 수 없습니다"
        message="인기 영화 목록을 가져오는 중 문제가 발생했습니다."
        onRetry={() => window.location.reload()}
      />
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
