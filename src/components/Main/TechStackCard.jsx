import React from "react";

function TechStackCard({name = "", content = [], logo = ""}) {
    return (
        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-border">
            <div className="bg-background p-2 mb-4 flex justify-center items-center w-12 h-12 rounded-lg">
                <span className="material-symbols-outlined text-2xl">{logo}</span>
            </div>
            <h3 className="font-bold mb-1">{name}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{content.join(", ")}</p>
        </div>
    );
}

export default TechStackCard;
