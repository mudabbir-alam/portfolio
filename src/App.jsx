// import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SidebarOverlay from "./components/Main/SidebarOverlay.jsx";
import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadResources() {
            try {
                console.log("Loading...");
                await Promise.all([
                    document.fonts.load('400 1em "Material Icons"'),
                    document.fonts.load('500 1em "Material Icons"'),
                    document.fonts.load('700 1em "Material Icons"'),
                ]);
                console.log("Fonts Loaded");
                setIsLoading(false);
            } catch (error) {
                console.error("Error", error);
            }
        }
        loadResources();
    }, []);

    useEffect(() => {
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        if (isSidebarOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "";
        }
    }, [isSidebarOpen]);

    function toggleSidebar() {
        setIsSidebarOpen((i) => !i);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            <>
                <SidebarOverlay />
                <div id="body" className="w-full min-h-screen font-inter">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </>
        </SidebarContext.Provider>
    );
}

export default App;
