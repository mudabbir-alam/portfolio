import React from "react";
import Experience from "./Experience";

function ExperienceSection() {
    return (
        <section
            id="experience"
            className="flex py-16 flex-col border-b border-b-border"
        >
            <div className="flex gap-3 items-center mb-8 w-full">
                <span className="w-8 h-0.5 bg-primary"></span>
                <h2 className="font-bold text-3xl">Work Experience</h2>
            </div>
            <Experience
                title="Computer Teacher"
                company="FROS Educational System"
                duration="January 2025 - May 2025"
                description="Worked as a Computer Instructor, teaching MS Office, HTML, CSS, JavaScript, and other fundamental IT skills. Helped students build practical knowledge through hands-on projects and exercises."
            />
            <Experience
                title="Computer Operator"
                company="The Citizen House School"
                duration="October 2024 - March 2025"
                description="Worked as a Computer Operator, handling fee challans, data entry, document preparation, and printing of official records while providing basic IT support."
            />
        </section>
    );
}

export default ExperienceSection;
