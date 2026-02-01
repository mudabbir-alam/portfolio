import React from "react";

function Button({ label = "Label", className = "", type = "submit", href }) {
    return (
        <a
            href={href}
            className={`py-4 px-8 rounded-lg text-base font-medium hover:cursor-pointer text-center ${className}`}
            type={type}
        >
            {label}
        </a>
    );
}

export default Button;
