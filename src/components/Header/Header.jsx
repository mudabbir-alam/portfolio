import Navbar from "./Navbar.jsx";

function Header() {
    return (
        <div id="header" className="w-full bg-white/80 dark:bg-background/80 sticky top-0 z-10 border-b border-border backdrop-blur-md overflow-hidden">
            <Navbar />
        </div>
    );
}

export default Header;