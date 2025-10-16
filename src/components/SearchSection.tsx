'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MovieList from '@/components/MovieList';
import { useSearchMovies } from '@/hooks/useMovies';
import MoviePagination from './Pagination';

export default function SearchSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [currentPage, setCurrentPage] = useState(1);

  // URL에서 페이지 파라미터 읽기
  useEffect(() => {
    const pageParam = searchParams.get('page');
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    if (page >= 1 && page !== currentPage) {
      setCurrentPage(page);
    }
  }, [searchParams, currentPage]);

  // React Query로 검색 데이터 로드
  const { data, isLoading, error } = useSearchMovies(query, currentPage);
  const movies = data?.results || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // URL에 페이지 파라미터 추가
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`/search?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    return (
      <div>
        {/* 검색 결과 정보 */}
        <div className="mb-6">
          <div className="text-sm text-gray-600">
            &ldquo;{query}&rdquo; 검색 결과:{' '}
            {data?.total_results.toLocaleString()}개
          </div>
        </div>

        {/* 영화 목록 */}
        <MovieList movies={movies} />

        {/* 페이지네이션 */}
        {data && data.total_pages > 1 && (
          <MoviePagination
            currentPage={currentPage}
            totalPages={data.total_pages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    );
  }

  // 검색어가 없을 때
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">검색어를 입력해주세요.</p>
    </div>
  );
}
