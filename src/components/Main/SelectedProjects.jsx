import React from "react";
import ProjectCard from "../ProjectCard";

function SelectedProjects() {
    return (
        <section
            id="selected-projects"
            className="flex py-16 flex-col border-b border-border"
        >
            <div className="flex gap-3 items-center mb-8 w-full">
                <span className="w-8 h-0.5 bg-primary"></span>
                <h2 className="font-bold text-3xl">Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    name="Portfolio"
                    bgImage="bg-[url('/Portfolio.png')]"
                    description="A modern, performance-optimized portfolio website built with React and Tailwind CSS, featuring responsive design and smooth UI interactions."
                    labels={["React", "Tailwind"]}
                    demoURL="https://mudabbir-alam.github.io/portfolio/"
                    sourceURL="https://github.com/mudabbir-alam/portfolio"
                />
                <ProjectCard
                    name="Portfolio"
                    bgImage="bg-[url('/Portfolio.png')]"
                    description="A modern, performance-optimized portfolio website built with React and Tailwind CSS, featuring responsive design and smooth UI interactions."
                    labels={["React", "Tailwind"]}
                    demoURL="https://mudabbir-alam.github.io/portfolio/"
                    sourceURL="https://github.com/mudabbir-alam/portfolio"
                />
                <ProjectCard
                    name="Portfolio"
                    bgImage="bg-[url('/Portfolio.png')]"
                    description="A modern, performance-optimized portfolio website built with React and Tailwind CSS, featuring responsive design and smooth UI interactions."
                    labels={["React", "Tailwind"]}
                    demoURL="https://mudabbir-alam.github.io/portfolio/"
                    sourceURL="https://github.com/mudabbir-alam/portfolio"
                />
            </div>
        </section>
    );
}

export default SelectedProjects;
