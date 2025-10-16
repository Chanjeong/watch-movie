'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MovieList from '@/components/MovieList';
import { usePopularMovies } from '@/hooks/useMovies';
import MoviePagination from './Pagination';

export default function AllMovies() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  // URL에서 페이지 파라미터 읽기
  useEffect(() => {
    const pageParam = searchParams.get('page');
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    if (page >= 1 && page !== currentPage) {
      setCurrentPage(page);
    }
  }, [searchParams, currentPage]);

  const { data, isLoading, error } = usePopularMovies(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // URL에 페이지 파라미터 추가
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`/movies?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-xl">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-500 text-xl">
          영화를 불러오는데 실패했습니다.
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* 영화 목록 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            {data && (
              <>
                총 {data.total_results.toLocaleString()}개 영화 중{' '}
                {(currentPage - 1) * 20 + 1}-
                {Math.min(currentPage * 20, data.total_results)}개 표시
              </>
            )}
          </div>
        </div>
        <MovieList movies={data?.results || []} />
      </div>

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
