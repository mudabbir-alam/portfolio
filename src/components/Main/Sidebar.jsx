import React from "react";
import Logo from "../Header/Logo";
import { navItems } from "../Header/NavItems";

function Sidebar() {
    return (
        <aside className="w-4/5 h-screen fixed top-0 right-0 bg-background z-10 flex flex-col gap-8">
            <div className="border-b border-border h-16 w-full flex justify-between items-center px-6">
                <Logo />
                <button className="material-symbols-outlined leading-none p-2 bg-slate-200 rounded-lg text-foreground">close</button>
            </div>
            <nav className="flex flex-col gap-8 px-6">
                {navItems.map((item, index) => (
                    <a href={`#${item.id}`} key={item.id}>{item.name}</a>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
