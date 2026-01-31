import React from "react";

function About() {
    return (
        <section
            id="about"
            className="flex py-16 flex-col border-b border-b-border"
        >
            <div className="flex gap-3 items-center mb-8 w-full">
                <span className="w-8 h-0.5 bg-primary"></span>
                <h2 className="font-bold text-3xl">About me</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-foreground">
                <div className="md:col-span-2 text-lg">
                    <div className="mb-6">
                        I am a dedicated Computer Science student with a deep
                        passion for web development. My journey started with a
                        curiosity for how things work on the internet, which
                        quickly evolved into a career path in front-end
                        engineering.
                    </div>
                    <div>
                        I specialize in building responsive, accessible, and
                        high-performance web applications using modern
                        technologies. My focus is always on writing clean code
                        and creating intuitive user interfaces that solve
                        real-world problems.
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-border p-6 text-foreground">
                    <h3 className="font-bold text-primary">Education</h3>
                    <h4 className="font-medium mt-3">BS Computer Science</h4>
                    <p className="text-sm mb-4">2025 — Present</p>
                    <div className="flex flex-col gap-2 dark:text-slate-400">
                        <div className="flex gap-2 items-center text-sm">
                            <span className="material-symbols-outlined">
                                school
                            </span>
                            <div>Web Development</div>
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                            <span className="material-symbols-outlined">
                                school
                            </span>
                            <div>Object Oriented Programming</div>
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                            <span className="material-symbols-outlined">
                                school
                            </span>
                            <div>Programming Fundamentals</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
