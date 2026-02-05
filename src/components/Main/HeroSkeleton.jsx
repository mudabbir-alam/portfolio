import Skeleton from "../../Skeleton";
function HeroSkeleton() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-12 items-center gap-4 border-b border-border animate-shimmer">
      <div className="flex flex-col">
        <Skeleton className="h-4 w-44 mb-4" />
        <Skeleton className="h-12 md:h-16 w-3/4 mb-4" />
        <Skeleton className="w-full h-4" count={2}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-8">
          <Skeleton className="h-15" />
          <Skeleton className="h-15" />
        </div>
      </div>
      <div className="w-full aspect-square flex items-center justify-center">
        <Skeleton className="w-4/5 aspect-square" borderRadius="1.5rem"/>
      </div>

    </section>
  );
}

export default HeroSkeleton;
