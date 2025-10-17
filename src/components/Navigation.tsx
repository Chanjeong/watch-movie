import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Navigation() {
  return (
    <div className="p-8 bg-gray-50">
      {/* 헤더 */}
      <header className="mb-8 flex items-center gap-4">
        {/* flex-shrink-0은 절대 줄어들지 않음 */}
        <h1 className="text-4xl font-bold whitespace-nowrap flex-shrink-0">
          <Link href={'/'}>🎬 뭐볼래</Link>
        </h1>
        <div className="flex-1 min-w-0">
          <SearchBar />
        </div>
        <Link href={'/favorites'}>즐겨찾기</Link>
      </header>
    </div>
  );
}
