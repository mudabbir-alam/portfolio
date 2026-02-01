import React from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import TechStack from "./TechStack.jsx";
import SelectedProjects from "./SelectedProjects.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import Contact from "./Contact.jsx";
import Sidebar from "./Sidebar.jsx";

function Main() {
    return (
        <main className="max-w-300 mx-auto px-6">
            <Hero />
            <About />
            <TechStack />
            <SelectedProjects />
            <ExperienceSection />
            <Contact />
            <Sidebar />
        </main>
    );
}

export default Main;
