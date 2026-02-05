import React from "react";

function Skeleton({
    borderRadius = "0.5rem",
    duration = "1.5s",
    height = "",
    width = "",
    count = 1,
    className = "",
}) {
    return Array.from({ length: count }, (_, i) => (
        <div
            key={i}
            className={`animate-shimmer my-2 bg-size-[200%_100%] bg-linear-to-r from-slate-100 via-slate-200 to-slate-100 ${className}`}
            style={{
                animationDuration: duration,
                borderRadius: borderRadius,
                height: height,
                width: width,
            }}
        ></div>
    ));
}

export default Skeleton;
