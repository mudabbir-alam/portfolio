import React, { useContext } from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import TechStack from "./TechStack.jsx";
import SelectedProjects from "./SelectedProjects.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import Contact from "./Contact.jsx";
import Sidebar from "./Sidebar.jsx";
import { LoadingContext } from "../../App.jsx";
import HeroSkeleton from "./HeroSkeleton.jsx";
import AboutSkeleton from "./AboutSkeleton.jsx";
import TechStackSkeleton from "./TechStackSkeleton.jsx";
import SelectedProjectsSkeleton from "./SelectedProjectsSkeleton.jsx";
import ExperienceSectionSkeleton from "./ExperienceSectionSkeleton.jsx";
import ContactSkeleton from "./ContactSkeleton.jsx"

function Main() {
    const loading = useContext(LoadingContext).isLoading;
    return (
        <main className="max-w-300 mx-auto px-6">
            {loading ? <HeroSkeleton /> : <Hero />}
            {loading ? <AboutSkeleton /> : <About />}
            {loading ? <TechStackSkeleton /> : <TechStack />}
            {loading ? <SelectedProjectsSkeleton /> : <SelectedProjects />}
            {loading ? <ExperienceSectionSkeleton /> : <ExperienceSection />}
            {loading ? <ContactSkeleton /> : <Contact />}
            <Sidebar />
        </main>
    );
}

export default Main;
