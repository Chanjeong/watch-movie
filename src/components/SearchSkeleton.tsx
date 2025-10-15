import { Skeleton } from '@/components/ui/skeleton';

export default function SearchSkeleton() {
  return (
    <div className="space-y-8">
      {/* 검색 결과 헤더 */}
      <div className="text-center">
        <Skeleton className="h-8 w-64 mx-auto mb-2" />
        <Skeleton className="h-4 w-32 mx-auto" />
      </div>

      {/* 영화 그리드 스켈레톤 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* 포스터 이미지 스켈레톤 */}
            <Skeleton className="aspect-[2/3] w-full" />

            {/* 영화 정보 스켈레톤 */}
            <div className="p-4 space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
