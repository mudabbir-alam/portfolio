import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
        if (isSidebarOpen) {
        document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";        }
    }, [isSidebarOpen])

    function toggleSidebar() {
        setIsSidebarOpen((i) => !i);
    }

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            <div id="body" className="w-full min-h-screen font-inter">
                <Header />
                <Main />
                <Footer />
            </div>
        </SidebarContext.Provider>
    );
}

export default App;
