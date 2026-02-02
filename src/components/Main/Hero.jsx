import React from "react";
import Button from "./Button.jsx";

function Hero() {
    return (
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 py-12 items-center gap-4 border-b border-border">
            <div id="hero-left flex">
                <div className="rounded-2xl bg-primary/20 text-xs font-medium py-1 px-3 inline-block">
                    AVAILABLE FOR PROJECTS
                </div>
                <h1 className="font-black text-5xl md:text-7xl mt-4">Mudabbir Alam</h1>
                <p className="text-xl mt-4">
                    BSCS Student & Front-End Developer crafting
                    high-performance, beautiful user experiences.
                </p>
                <div id="hero-buttons-container" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-8">
                    <Button href="#selected-projects" label="View Projects" className="bg-primary text-white hover:bg-primary/90"/>
                    <Button href="#" label="Download CV" className="bg-white dark:bg-background hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors border-border border-2"/>
                </div>
            </div>
            <div id="hero-right" className="w-full aspect-square flex items-center justify-center">
                <div id="image-container" className="w-4/5 aspect-square bg-[url('/mudabbir.png')] bg-center bg-cover rounded-2xl hover:grayscale-0 grayscale-50 duration-200 transition-all"></div>
            </div>
        </section>
    );
}

export default Hero;
