import Navbar from "./Navbar.jsx";

function Header() {
    return (
        <div id="header" className="w-full bg-white/80 dark:bg-background/80 sticky top-0 z-1 border-b border-border backdrop-blur-md">
            <Navbar />
        </div>
    );
}

export default Header;