import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MovieStore {
  // 즐겨찾기 영화 ID 목록
  favorites: number[];
  addToFavorites: (movieId: number) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;

  // 검색 히스토리
  searchHistory: string[];
  addToSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;

  // UI 상태
  selectedMovie: number | null;
  setSelectedMovie: (movieId: number | null) => void;
}

export const useMovieStore = create<MovieStore>()(
  persist(
    (set, get) => ({
      // 즐겨찾기 관련
      favorites: [],
      addToFavorites: movieId =>
        set(state => ({
          favorites: [...state.favorites, movieId]
        })),
      removeFromFavorites: movieId =>
        set(state => ({
          favorites: state.favorites.filter(id => id !== movieId)
        })),
      isFavorite: movieId => get().favorites.includes(movieId),

      // 검색 히스토리 관련
      searchHistory: [],
      addToSearchHistory: query =>
        set(state => {
          const newHistory = [
            query,
            ...state.searchHistory.filter(h => h !== query)
          ].slice(0, 10);
          return { searchHistory: newHistory };
        }),
      clearSearchHistory: () => set({ searchHistory: [] }),

      // UI 상태 관련
      selectedMovie: null,
      setSelectedMovie: movieId => set({ selectedMovie: movieId })
    }),
    {
      name: 'movie-store', // localStorage 키
      partialize: state => ({
        favorites: state.favorites, // 즐겨찾기만 저장
        searchHistory: state.searchHistory // 검색 히스토리도 저장
      })
    }
  )
);
