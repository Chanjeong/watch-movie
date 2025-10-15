import { useQuery } from '@tanstack/react-query';
import {
  getPopularMovies,
  searchMovies,
  getMovieDetail,
  getSimilarMovies
} from '@/lib/tmdb';

/**
 * 인기 영화 목록 훅
 *
 * React Query의 useQuery를 사용해서:
 * - 자동 캐싱 (5분간)
 * - 로딩 상태 관리
 * - 에러 처리
 * - 백그라운드 업데이트
 */
export const usePopularMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'popular', page],
    queryFn: () => getPopularMovies(page),
    staleTime: 5 * 60 * 1000 // 5분간 캐시 유지
  });
};

/**
 * 영화 검색 훅
 *
 * 검색어가 있을 때만 실행되도록 enabled 옵션 사용
 */
export const useSearchMovies = (query: string, page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'search', query, page],
    queryFn: () => searchMovies(query, page),
    enabled: query.length > 0, // 검색어가 있을 때만 실행
    staleTime: 2 * 60 * 1000 // 2분간 캐시 유지
  });
};

/**
 * 영화 상세 정보 훅
 *
 * 영화 ID로 상세 정보를 가져옵니다
 */
export const useMovieDetail = (movieId: number) => {
  return useQuery({
    queryKey: ['movies', 'detail', movieId],
    queryFn: () => getMovieDetail(movieId),
    enabled: movieId > 0, // 유효한 ID일 때만 실행
    staleTime: 10 * 60 * 1000 // 10분간 캐시 유지 (상세 정보는 자주 변경되지 않음)
  });
};

/**
 * 비슷한 영화 목록 훅
 *
 * 특정 영화와 비슷한 영화들을 가져옵니다
 */
export const useSimilarMovies = (movieId: number) => {
  return useQuery({
    queryKey: ['movies', 'similar', movieId],
    queryFn: () => getSimilarMovies(movieId),
    enabled: movieId > 0, // 유효한 ID일 때만 실행
    staleTime: 5 * 60 * 1000 // 5분간 캐시 유지
  });
};
