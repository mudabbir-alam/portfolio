import Skeleton from "../../Skeleton";

function ContactSkeleton() {
    return (
        <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 border border-border rounded-2xl bg-gray-100 dark:bg-slate-800">
                {/* LEFT SIDE */}
                <div>
                    {/* Title */}
                    <Skeleton className="h-8 w-40 mb-6" />

                    {/* Paragraph */}
                    <Skeleton count={3} className="w-full h-4" />

                    {/* Contact rows */}

                    <div className="flex items-center gap-3 mt-6">
                        <Skeleton className="w-10 h-10" borderRadius="50%" />
                        <Skeleton className="h-4 w-48" />
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <Skeleton className="w-10 h-10" borderRadius="50%" />
                        <Skeleton className="h-4 w-48" />
                    </div>
                </div>

                {/* RIGHT SIDE (FORM) */}
                <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-12 col-span-2 sm:col-span-1" />
                    <Skeleton className="h-12 col-span-2 sm:col-span-1" />
                    <Skeleton className="h-12 col-span-2" />
                    <Skeleton className="h-28 col-span-2" />
                    <Skeleton className="h-12 col-span-2" />
                </div>
            </div>
        </section>
    );
}

export default ContactSkeleton;
