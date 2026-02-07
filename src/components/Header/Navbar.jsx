import { useState, useEffect } from "react";
import Logo from "./Logo.jsx";
import NavItems from "./NavItems.jsx";
import { useContext } from "react";
import { SidebarContext } from "../../App.jsx";

function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkmode") !== null;
    });
    function toggleTheme() {
        darkMode
            ? localStorage.removeItem("darkmode")
            : localStorage.setItem("darkmode", true);
        setDarkMode((d) => !d);
        console.log(localStorage);
    }

    useEffect(() => {
        const html = document.documentElement;
        darkMode ? html.classList.add("dark") : html.classList.remove("dark");
    }, [darkMode]);

    useEffect(() => {
        const html = document.documentElement;
        html.classList.add("theme");
    }, []);

    return (
        <div className="navbar flex justify-between items-center h-16 px-6 max-w-300 mx-auto">
            <Logo />
            <div className="nav-items-container">
                <NavItems />
            </div>
            <div className="flex gap-4 items-center justify-end h-4/5">
                <button
                    onClick={toggleTheme}
                    className="flex justify-center items-center bg-background px-2 rounded-lg border border-border hover:cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 w-8 h-8 material-symbols-outlined"
                >
                    {darkMode ? "light_mode" : "dark_mode"}
                </button>
                <button
                    className="block md:hidden material-symbols-outlined text-2xl h-8 w-8 cursor-pointer"
                    onClick={useContext(SidebarContext).toggleSidebar}
                >
                    menu
                </button>
            </div>
        </div>
    );
}

export default Navbar;
