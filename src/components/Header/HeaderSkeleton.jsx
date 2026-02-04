import React from "react";
import Skeleton from "../../Skeleton";

function HeaderSkeleton() {
    return (
        <header className="w-full bg-white/80 dark:bg-background/80 sticky top-0 z-10 border-b border-border">
            <div
                id="navbar"
                className="flex h-16 justify-between items-center px-6 mx-auto max-w-300"
            >
                <div className="logo-container flex gap-2 items-center justify-between">
                    <Skeleton width="34px" height="34px" />
                    <Skeleton width="124px" />
                </div>
                <nav className="w-96 items-center justify-between gap-8 hidden md:flex">
                    <Skeleton count={5} className="flex-1" />
                </nav>
                <div className="flex gap-4">
                    <Skeleton width="32px" height="32px" />
                    <Skeleton width="32px" height="32px" className="md:hidden"/>
                </div>
            </div>
        </header>
    );
}

export default HeaderSkeleton;
