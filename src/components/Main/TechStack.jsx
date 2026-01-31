import React from "react";
import TechStackCard from "./TechStackCard";

function TechStack() {
    return (
        <section
            id="skills"
            className="flex py-16 flex-col border-b border-b-border"
        >
            <div className="flex gap-3 items-center mb-8 w-full">
                <span className="w-8 h-0.5 bg-primary"></span>
                <h2 className="font-bold text-3xl">Tech Stack</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TechStackCard
                    name="JavaScript"
                    content={["ES6+", "Async", "DOM"]}
                    logo="javascript"
                />
                <TechStackCard
                    name="React"
                    content={["Hooks", "Context API"]}
                    logo="data_object"
                />
                <TechStackCard
                    name="Tailwind CSS"
                    content={["Responsive", "Custom UI"]}
                    logo="css"
                />
                <TechStackCard
                    name="C++"
                    content={["Algorithms", "Logic"]}
                    logo="memory"
                />
            </div>
        </section>
    );
}

export default TechStack;