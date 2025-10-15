// TMDB API에서 받아오는 데이터의 "모양"을 정의하는 파일

export interface Movie {
  id: number; // 영화 고유 번호
  title: string; // 영화 제목
  overview: string; // 영화 줄거리
  poster_path: string | null; // 포스터 이미지 경로 (없을 수도 있음)
  backdrop_path: string | null; // 배경 이미지 경로
  release_date: string; // 개봉일 (예: "2024-01-01")
  vote_average: number; // 평점 (예: 8.5)
  vote_count: number; // 투표 수
  popularity: number; // 인기도
  adult: boolean; // 성인 영화 여부
  genre_ids: number[]; // 장르 ID 배열
  original_language: string; // 원본 언어
  original_title: string; // 원본 제목
  video: boolean; // 비디오 있는지 여부
  tagline: string; // 태그라인 (선택적)
  runtime: number; // 상영시간 (분, 선택적)
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

export interface TMDBResponse<T> {
  page: number; // 현재 페이지 번호
  results: T[]; // 영화 목록 배열 (T는 Movie 타입)
  total_pages: number; // 전체 페이지 수
  total_results: number; // 전체 결과 수
}
