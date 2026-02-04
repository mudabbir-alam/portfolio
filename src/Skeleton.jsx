import React from "react";

function Skeleton({
    borderRadius = "0.5rem",
    duration = "1.5s",
    height = "1rem",
    width = "full",
}) {
    return (
        <div
            className="animate-shimmer bg-size-[200%_100%] bg-linear-to-r from-slate-100 via-slate-200 to-slate-100"
            style={{
                animationDuration: duration,
                borderRadius: borderRadius,
                height: height,
                width: width,
            }}
        ></div>
    );
}

export default Skeleton;
