'use client';

import { useMultipleMovieDetail } from '@/hooks/useMovies';
import { useMovieStore } from '@/store/movieStore';
import MovieList from './MovieList';
import type { Movie } from '@/types/movie';
import LoadingDisplay from './common/LoadingDisplay';
import ErrorDisplay from './common/ErrorDisplay';

export default function Favorites() {
  const { favorites } = useMovieStore();
  const results = useMultipleMovieDetail(favorites);

  // 전체 로딩 상태 (하나라도 로딩 중이면 true)
  const isLoading = results.some(result => result.isLoading);
  const error = results.some(result => result.error);

  if (isLoading) {
    return <LoadingDisplay count={results.length} />;
  }

  // 전체 에러 상태 (하나라도 에러가 있으면 true)
  if (error) {
    return (
      <ErrorDisplay
        title="영화를 불러올 수 없습니다"
        message="인기 영화 목록을 가져오는 중 문제가 발생했습니다."
        onRetry={() => window.location.reload()}
      />
    );
  }

  // 성공한 영화 데이터만 추출
  const movies = results
    .filter(result => result.data) // 데이터가 있는 것만
    .map(result => result.data); // 데이터만 추출

  return <MovieList movies={movies as Movie[]} />;
}
