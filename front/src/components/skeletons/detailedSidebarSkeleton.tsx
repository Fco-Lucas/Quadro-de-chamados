import { Skeleton } from "../ui/skeleton";

export function DetailedSidebarSkeleton() {
  return (
    <div className="flex flex-col h-full w-64 border-r p-4 gap-6">
      {[...Array(3)].map((_, groupIndex) => (
        <div key={groupIndex} className="space-y-4">
          <Skeleton className="h-5 w-1/2 mb-2" />
          <div className="space-y-2">
            {[...Array(3)].map((_, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-3 p-2">
                <Skeleton className="h-5 w-5 rounded-sm" />
                <Skeleton className="h-5 w-32" />
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Footer */}
      <div className="mt-auto flex items-center gap-3 p-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="flex-1 space-y-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  )
}