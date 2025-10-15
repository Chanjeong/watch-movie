/**
 * TMDB API 호출 함수들
 *
 * 각 함수는 특정 API 엔드포인트를 호출하고
 * Promise를 반환합니다.
 */

import axiosInstance from './axios';
import type { Movie, TMDBResponse } from '@/types/movie';

/**
 * 1️⃣ 인기 영화 목록 가져오기
 *
 * @param page 페이지 번호 (기본값: 1)
 * @returns Promise<TMDBResponse<Movie>>
 */
export const getPopularMovies = async (
  page: number = 1
): Promise<TMDBResponse<Movie>> => {
  const response = await axiosInstance.get<TMDBResponse<Movie>>(
    '/movie/popular',
    {
      params: { page }
    }
  );
  return response.data;
};

/**
 * 2️⃣ 트렌딩 영화 목록 (주간)
 *
 * @param page 페이지 번호 (기본값: 1)
 * @returns Promise<TMDBResponse<Movie>>
 */
export const getTrendingMovies = async (
  page: number = 1
): Promise<TMDBResponse<Movie>> => {
  const response = await axiosInstance.get<TMDBResponse<Movie>>(
    '/trending/movie/week',
    {
      params: { page }
    }
  );
  return response.data;
};

/**
 * 3️⃣ 영화 검색
 *
 * @param query 검색어
 * @param page 페이지 번호 (기본값: 1)
 * @returns Promise<TMDBResponse<Movie>>
 */
export const searchMovies = async (
  query: string,
  page: number = 1
): Promise<TMDBResponse<Movie>> => {
  const response = await axiosInstance.get<TMDBResponse<Movie>>(
    '/search/movie',
    {
      params: { query, page }
    }
  );
  return response.data;
};

export const getMovieDetail = async (movieId: number): Promise<Movie> => {
  const response = await axiosInstance.get<Movie>(`/movie/${movieId}`);
  return response.data;
};

/**
 * 5️⃣ 비슷한 영화 추천
 *
 * @param movieId 영화 ID
 * @param page 페이지 번호 (기본값: 1)
 * @returns Promise<TMDBResponse<Movie>>
 */
export const getSimilarMovies = async (
  movieId: number,
  page: number = 1
): Promise<TMDBResponse<Movie>> => {
  const response = await axiosInstance.get<TMDBResponse<Movie>>(
    `/movie/${movieId}/recommendations`,
    {
      params: { page }
    }
  );
  return response.data;
};

export const getImageUrl = (
  path: string | null,
  size: 'w200' | 'w500' | 'original' = 'w500'
): string => {
  if (!path) return '/placeholder-movie.jpg'; // 기본 이미지
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
