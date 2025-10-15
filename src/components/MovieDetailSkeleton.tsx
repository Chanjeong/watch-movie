import { Skeleton } from '@/components/ui/skeleton';

export default function MovieDetailSkeleton() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* 영화 상세 정보 스켈레톤 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 포스터 이미지 스켈레톤 */}
        <div className="lg:col-span-1">
          <Skeleton className="aspect-[2/3] w-full rounded-lg" />
        </div>

        {/* 영화 정보 스켈레톤 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 제목과 버튼 */}
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-2">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>

          {/* 기본 정보 */}
          <div className="flex flex-wrap gap-6">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>

          {/* 장르 */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-16" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-14 rounded-full" />
            </div>
          </div>

          {/* 줄거리 */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-20" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          {/* 홈페이지 버튼 */}
          <Skeleton className="h-10 w-40" />
        </div>
      </div>

      {/* 비슷한 영화 섹션 스켈레톤 */}
      <div className="mt-16">
        <Skeleton className="h-8 w-32 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="aspect-[2/3] w-full rounded-lg" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
