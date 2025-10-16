import MovieDetail from '@/components/MovieDetail';

interface MoviePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const resolvedParams = await params;
  const movieId = parseInt(resolvedParams.id);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <MovieDetail movieId={movieId} />
    </div>
  );
}
