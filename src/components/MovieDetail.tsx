'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useMovieDetail, useSimilarMovies } from '@/hooks/useMovies';
import { getImageUrl } from '@/lib/tmdb';
import { useMovieStore } from '@/store/movieStore';
import { Button } from '@/components/ui/button';
import { Heart, Clock, Star } from 'lucide-react';
import MovieDetailSkeleton from './MovieDetailSkeleton';

interface MovieDetailProps {
  movieId: number;
}

export default function MovieDetail({ movieId }: MovieDetailProps) {
  const { data: movie, isLoading, error } = useMovieDetail(movieId);
  const { data: similarMovies } = useSimilarMovies(movieId);
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieStore();

  if (isLoading) {
    return <MovieDetailSkeleton />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            영화 정보를 불러올 수 없습니다
          </h2>
          <p className="text-gray-600 mb-6">
            해당 영화의 정보를 찾을 수 없습니다.
          </p>
          <Button asChild>
            <Link href="/movies">영화 목록으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">영화 정보가 없습니다.</div>
      </div>
    );
  }

  const handleFavoriteClick = () => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie.id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* 영화 상세 정보 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 포스터 이미지 */}
        <div className="lg:col-span-1">
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={getImageUrl(movie.poster_path, 'original')}
              alt={movie.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* 영화 정보 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 제목과 즐겨찾기 */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {movie.title}
              </h1>
              {movie.tagline && (
                <p className="text-xl text-gray-600 italic">
                  &ldquo;{movie.tagline}&rdquo;
                </p>
              )}
            </div>
            <Button
              onClick={handleFavoriteClick}
              variant={isFavorite(movie.id) ? 'default' : 'outline'}
              size="lg"
              className="flex items-center gap-2">
              <Heart
                className={`h-5 w-5 ${
                  isFavorite(movie.id) ? 'fill-current' : ''
                }`}
              />
              {isFavorite(movie.id) ? '즐겨찾기됨' : '즐겨찾기'}
            </Button>
          </div>

          {/* 기본 정보 */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-semibold">
                {movie.vote_average.toFixed(1)}
              </span>
              <span>({movie.vote_count.toLocaleString()}명)</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>
                {movie.runtime ? `${movie.runtime}분` : '상영시간 미상'}
              </span>
            </div>
            <div>
              <span>{movie.release_date.split('-')[0]}년</span>
            </div>
          </div>

          {/* 장르 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">장르</h3>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map(genre => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          {/* 줄거리 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">줄거리</h3>
            <p className="text-gray-700 leading-relaxed">
              {movie.overview || '줄거리 정보가 없습니다.'}
            </p>
          </div>
        </div>
      </div>

      {/* 비슷한 영화 섹션 */}
      {similarMovies && similarMovies.results.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">비슷한 영화</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {similarMovies.results.slice(0, 12).map(similarMovie => (
              <Link
                key={similarMovie.id}
                href={`/movies/${similarMovie.id}`}
                className="group block">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <Image
                    src={getImageUrl(similarMovie.poster_path, 'w500')}
                    alt={similarMovie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {similarMovie.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    <span className="text-xs text-gray-600">
                      {similarMovie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
