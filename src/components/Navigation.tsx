import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Navigation() {
  return (
    <div className="p-8 bg-gray-50">
      {/* 헤더 */}
      <header className="mb-8 flex items-center gap-8">
        <h1 className="text-4xl font-bold">
          <Link href={'/'}>🎬 뭐볼래</Link>
        </h1>
        <SearchBar />
      </header>
    </div>
  );
}
