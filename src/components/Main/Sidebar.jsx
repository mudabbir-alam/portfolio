import React from "react";
import Logo from "../Header/Logo";
import { navItems } from "../Header/NavItems";
import { useContext } from "react";
import { SidebarContext } from "../../App";

function Sidebar() {
    const sidebar = useContext(SidebarContext);

    return (
        <aside
            className={`w-4/5 h-screen fixed top-0 right-0 bg-white dark:bg-slate-800 z-10 flex flex-col gap-8 ${sidebar.isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform ease-in-out border-l border-border`}
        >
            <div className="border-b border-border h-16 w-full flex justify-between items-center px-6">
                <Logo />
                <button
                    className="material-symbols-outlined leading-none p-2 bg-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 border-border border dark:bg-background rounded-lg text-xl font-bold text-foreground cursor-pointer"
                    onClick={sidebar.toggleSidebar}
                >
                    close
                </button>
            </div>
            <nav className="flex flex-col gap-6 px-6">
                {navItems.map((item, index) => (
                    <a href={`#${item.id}`} key={item.id} onClick={sidebar.toggleSidebar} className="bg-background px-4 py-2 rounded-lg text-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700">
                        {item.name}
                    </a>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
