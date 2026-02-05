import React from "react";

function ProjectCard({name = "Title", labels = ["label"], description = "Created with Love and Joy", bgImage = "", demoURL = "#", sourceURL = "#"}) {
    return (
        <div className="bg-white transition-all duration-200 dark:bg-slate-800 rounded-2xl group hover:shadow-xl border-2 border-border">
            <div className="aspect-video rounded-t-2xl overflow-hidden bg-slate-500">
                <div className={`bg-center bg-cover w-full h-full group-hover:scale-105 transition-all duration-500 group-hover:opacity-90 ${bgImage}`}></div>
            </div>
            <div className="flex flex-col p-6 text-foreground">
                <div className="labels flex gap-2">{labels.map((item, index) => <span key={index} className="rounded bg-primary/10 dark:bg-primary/30 px-2 py-1 font-bold uppercase text-blue-p text-[10px]">
                        {item}
                    </span>)}
                </div>
                <h3 className="font-bold text-xl my-2">{name}</h3>
                <p id="project-description" className="text-sm dark:text-slate-400 grow mb-4">
                    {description}
                </p>
                <div className="grid grid-cols-2 justify-between gap-4">
                    <a href={demoURL} className="bg-primary py-3 rounded-lg text-white font-bold flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-primary/90">
                        <span className="material-symbols-outlined text-lg">
                            visibility
                        </span>
                        <span className="text-sm">Live Demo</span>
                    </a>
                    <a href={sourceURL} className="border-border border dark: py-3 rounded-lg text-foreground font-bold flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 bg-background">
                        <span className="material-symbols-outlined text-lg">
                            code
                        </span>
                        <span className="text-sm">Source</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
