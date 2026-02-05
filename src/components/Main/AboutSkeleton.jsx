import Skeleton from "../../Skeleton";

function AboutSkeleton() {
    return (
        <section className="flex py-16 flex-col border-b border-b-border">
            <Skeleton className="h-8 w-32 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                    <div className="space-y-3">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-5/6" />
                    </div>
                    <div className="space-y-3 mt-6">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-4/6" />
                    </div>
                </div>
                <Skeleton className="h-48 md:h-full" />
            </div>
        </section>
    );
}

export default AboutSkeleton;
