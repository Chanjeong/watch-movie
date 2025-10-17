import axios from 'axios';

const axiosInstance = axios.create({
  // 기본 URL: 모든 요청 앞에 자동으로 붙음
  baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,

  // 모든 요청에 자동으로 포함될 파라미터
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY, // TMDB API 키
    language: 'ko-KR' // 한국어로 응답 받기
  }
});

// 설정된 axios 인스턴스를 export (다른 파일에서 사용할 수 있게)
export default axiosInstance;
