import Skeleton from "../../Skeleton";

function ProjectCardSkeleton() {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-border overflow-hidden">
            <Skeleton
                className="animate-shimmer aspect-video rounded-t-2xl bg-gray-300 mt-0"
                borderRadius="0"
            />

            <div className="flex flex-col px-6 py-4">
                <div className="flex gap-2 mb-2">
                    <Skeleton className="h-4 w-14 mt-0" />
                    <Skeleton className="h-4 w-14 mt-0" />
                </div>
                <Skeleton className="h-6 w-32 mb-3" />
                <div className="space-y-2 mb-4">
                    <Skeleton className="w-full h-3.5" count={4}/>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                    <Skeleton className="h-12" count={2} />
                </div>
            </div>
        </div>
    );
}

export default ProjectCardSkeleton;
