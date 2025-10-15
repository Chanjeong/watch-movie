import { Suspense } from 'react';
import SearchSection from '@/components/SearchSection';
import SearchSkeleton from '@/components/SearchSkeleton';

export default function SearchPage() {
  return (
    <div className="p-8 bg-gray-50">
      {/* 검색 섹션 - 클라이언트 컴포넌트 */}
      <Suspense fallback={<SearchSkeleton />}>
        <SearchSection />
      </Suspense>
    </div>
  );
}
