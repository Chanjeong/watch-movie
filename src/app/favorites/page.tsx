import Favorites from '@/components/Favorites';

export default function FavoritesPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="font-bold text-2xl mb-10">즐겨찾기</h1>
      <Favorites />
    </div>
  );
}
