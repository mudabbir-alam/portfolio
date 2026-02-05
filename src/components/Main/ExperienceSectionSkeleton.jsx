import Skeleton from "../../Skeleton";
import ExperienceSkeleton from "./ExperienceSkeleton";

function ExperienceSectionSkeleton() {
    return (
        <section className="flex py-16 flex-col border-b border-b-border">
            {/* SECTION TITLE */}
            <div className="flex gap-3 items-center mb-8 w-full">
                <Skeleton className="h-8 w-48" />
            </div>

            <ExperienceSkeleton />
            <ExperienceSkeleton />
        </section>
    );
}

export default ExperienceSectionSkeleton;
