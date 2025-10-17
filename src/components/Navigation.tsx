import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Navigation() {
  return (
    <div className="p-4 sm:p-8 bg-gray-50">
      {/* 헤더 */}
      <header className="mb-8 flex items-center gap-2 sm:gap-4">
        {/* 모바일에서는 작게, 데스크톱에서는 크게 */}
        <h1 className="text-2xl sm:text-4xl font-bold whitespace-nowrap flex-shrink-0">
          <Link href={'/'}>🎬 뭐볼래</Link>
        </h1>
        <div className="flex-1 min-w-0">
          <SearchBar />
        </div>
        {/* 모바일에서는 작게, 데스크톱에서는 보통 크기 */}
        <Link
          href={'/favorites'}
          className="text-sm sm:text-base font-medium whitespace-nowrap flex-shrink-0 hover:text-blue-600 transition-colors">
          즐겨찾기
        </Link>
      </header>
    </div>
  );
}
