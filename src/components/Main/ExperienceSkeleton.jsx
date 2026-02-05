import Skeleton from "../../Skeleton";

function ExperienceSkeleton() {
    return (
        <div className="flex gap-8 mb-12">
            {/* TIMELINE */}
            <div className="flex flex-col items-center gap-1">
                <Skeleton className="w-5 h-5 rounded-full" />
                <Skeleton className="w-1 grow" />
            </div>

            {/* CONTENT */}
            <div className="flex-1">
                {/* TITLE */}
                <Skeleton className="h-6 w-48 mb-2" />

                {/* COMPANY + DURATION */}
                <Skeleton className="h-4 w-64 mb-3" />

                {/* DESCRIPTION */}
                <Skeleton count={3} className="h-3 mb-2 w-full"/>
            </div>
        </div>
    );
}

export default ExperienceSkeleton;
