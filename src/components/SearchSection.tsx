'use client';

import { useSearchParams } from 'next/navigation';
import MovieList from '@/components/MovieList';
import { useSearchMovies } from '@/hooks/useMovies';

export default function SearchSection() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // React Query로 검색 데이터 로드
  const { data, isLoading, error } = useSearchMovies(query, 1);
  const movies = data?.results || [];

  // 로딩 상태
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-xl">검색 중...</div>
      </div>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-500 text-xl">검색 중 오류가 발생했습니다.</div>
      </div>
    );
  }

  // 검색 결과가 없을 때
  if (query && movies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          &ldquo;{query}&rdquo;에 대한 검색 결과가 없습니다.
        </p>
      </div>
    );
  }

  // 영화 목록
  if (movies.length > 0) {
    return <MovieList movies={movies} />;
  }

  // 검색어가 없을 때
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">검색어를 입력해주세요.</p>
    </div>
  );
}
