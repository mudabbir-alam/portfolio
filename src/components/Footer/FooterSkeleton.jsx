import Skeleton from "../../Skeleton";

function FooterSkeleton() {
    return (
        <footer className="border-t border-t-border w-full py-12">
            <div className="flex justify-between max-w-300 px-6 mx-auto items-center flex-col gap-4 sm:flex-row">
                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <Skeleton className="w-8 h-8" />
                    <Skeleton className="h-4 w-32" />
                </div>

                {/* COPYRIGHT */}
                <Skeleton className="h-4 w-64" />

                {/* ICONS */}
                <div className="flex gap-4">
                    <Skeleton className="w-6 h-6" />
                    <Skeleton className="w-6 h-6" />
                </div>
            </div>
        </footer>
    );
}

export default FooterSkeleton;
