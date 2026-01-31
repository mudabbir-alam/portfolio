import React from "react";

function NavItems() {
    const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];
    return (
        <ol className="gap-8 text-sm font-medium hidden md:flex">
            {navItems.map((item, index) => (
                <li key={index}><a href="#" className="hover:text-primary duration-50">{item}</a></li>
            ))}
        </ol>
    );
}

export default NavItems;
