import { Skeleton } from "@/components/ui/skeleton"

export function ShowAnimeSkeleton() {
  return (
    <div className="w-full">
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-4 w-full">
      <div className="grid grid-cols-3 gap-2 md:gap-4 w-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-md w-full shadow-lg">
            <div className="h-[150px] w-full bg-white/20 animate-pulse"></div>
            <div className="p-2 text-center">
              <Skeleton className="h-4 w-3/4 mx-auto bg-white/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
