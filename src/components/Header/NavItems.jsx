import React from "react";

function NavItems() {
    const navItems = [
        {name: "About", id: "about"},
        {name: "Skills", id: "skills"},
        {name: "Projects", id: "selected-projects"},
        {name: "Experience", id: "experience-section"},
        {name: "Contact", id: "contact"}
    ];
    return (
        <ol className="gap-8 text-sm font-medium hidden md:flex">
            {navItems.map((item, index) => (
                <li key={item.id}><a href={`#${item.id}`} className="hover:text-primary duration-50">{item.name}</a></li>
            ))}
        </ol>
    );
}

export default NavItems;
