import React from "react";

function Button({
    label = "Label",
    className = "",
    type = "submit",
    href,
    onClick,
}) {
    if (onClick) {
        return (
            <button
                className={`py-4 px-8 rounded-lg text-base font-medium hover:cursor-pointer text-center ${className}`}
                onClick={onClick}
                type={type}
            >
                {label}
            </button>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                className={`py-4 px-8 rounded-lg text-base font-medium hover:cursor-pointer text-center ${className}`}
            >
                {label}
            </a>
        );
    }
}

export default Button;
