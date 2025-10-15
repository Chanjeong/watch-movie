'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getImageUrl } from '@/lib/tmdb';
import { useMovieStore } from '@/store/movieStore';
import type { Movie } from '@/types/movie';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieStore();

  const handleFavoriteClick = (movieId: number, e: React.MouseEvent) => {
    e.stopPropagation(); // 영화 카드 클릭 방지
    if (isFavorite(movieId)) {
      removeFromFavorites(movieId);
    } else {
      addToFavorites(movieId);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map(movie => (
        <Link
          key={movie.id}
          href={`/movies/${movie.id}`}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block">
          {/* 포스터 이미지 */}
          <div className="relative aspect-[2/3] bg-gray-200">
            <Image
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          </div>

          {/* 영화 정보 */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg line-clamp-2 flex-1">
                {movie.title}
              </h3>
              <button
                onClick={e => handleFavoriteClick(movie.id, e)}
                className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors">
                {isFavorite(movie.id) ? (
                  <span className="text-red-500 text-xl">❤️</span>
                ) : (
                  <span className="text-gray-400 text-xl">🤍</span>
                )}
              </button>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>⭐ {movie.vote_average.toFixed(1)}</span>
              <span>{movie.release_date.split('-')[0]}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
