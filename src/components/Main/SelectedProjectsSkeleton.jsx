import Skeleton from "../../Skeleton";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

function SelectedProjectsSkeleton() {
  return (
    <section
      className="flex py-16 flex-col border-b border-border"
    >
      <div className="flex gap-3 items-center mb-8 w-full">
        <Skeleton className="h-8 w-32" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </section>
  );
}

export default SelectedProjectsSkeleton;
