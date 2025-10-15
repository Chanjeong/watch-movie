import MovieDetail from '@/components/MovieDetail';

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default function MoviePage({ params }: MoviePageProps) {
  const movieId = parseInt(params.id);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <MovieDetail movieId={movieId} />
    </div>
  );
}

