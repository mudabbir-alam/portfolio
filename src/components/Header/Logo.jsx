import React from "react";

function Logo({onClick}) {
    return (
        <a onClick={onClick} href="#" className="logo-container flex justify-center items-center gap-2 text-base">
            <span className="material-symbols-outlined text-lg bg-primary p-2 leading-none font-medium rounded-lg text-white" >code</span>
            <span className="title font-bold text-lg tracking-tight text-foreground">Mudabbir Alam</span>
        </a>
    );
}

export default Logo;
