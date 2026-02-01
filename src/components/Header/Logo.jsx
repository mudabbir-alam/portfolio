import React from "react";

function Logo({onClick}) {
    return (
        <a onClick={onClick} href="#" className="logo-container flex justify-center items-center gap-2 text-base">
            <div className="bg-primary text-white p-1.5 flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-xl leading-none">
                    code
                </span>
            </div>
            <span className="title font-bold text-lg tracking-tight">Mudabbir Alam</span>
        </a>
    );
}

export default Logo;
