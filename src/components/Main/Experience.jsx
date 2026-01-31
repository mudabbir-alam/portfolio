import React from "react";

function Experience({
    title = "Experience",
    company = "Company",
    duration = "-",
    description = "Decription",
}) {
    return (
        <div className="flex gap-8 mb-12">
            <div className="flex flex-col items-center gap-2">
                <div className="w-5 h-5 rounded-[50%] bg-slate-300 dark:bg-slate-600"></div>
                <div className="w-0.5 grow bg-slate-200 dark:bg-slate-700"></div>
            </div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-primary font-medium">
                    {company} | {duration}
                </p>
                <p className="text-slate-500 dark:text-slate-400 pt-2">{description}</p>
            </div>
        </div>
    );
}

export default Experience;
