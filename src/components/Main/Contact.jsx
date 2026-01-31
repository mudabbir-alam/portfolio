import React from "react";
import Button from "./Button";

function Contact() {
    return (
        <section id="contact" className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 border border-border rounded-2xl bg-primary/5 dark:bg-primary/20">
                <div className="contact-left">
                    <h2 className="font-bold text-3xl">Get in touch</h2>
                    <p className="text-slate-600 dark:text-slate-400 my-6">
                        Have a project in mind or just want to chat? I'm always
                        open to discussing new opportunities and creative ideas.
                    </p>
                    <div className="flex items-center justify-start gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary font-medium text-xl bg-primary/5 dark:bg-primary/20 leading-none p-2 rounded-[50%] flex items-center justify-center">
                            mail
                        </span>
                        <span className="font-medium">
                            mudabbiralam885@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center justify-start gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary font-medium text-xl bg-primary/5 dark:bg-primary/20 leading-none p-2 rounded-[50%] flex items-center justify-center">
                            location_on
                        </span>
                        <span className="font-medium">
                            Rahim Yar Khan, Pakistan
                        </span>
                    </div>
                </div>
                <form className="contact-right grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="First name"
                        className="bg-background dark:text-slate-300 p-3 border-2 border-border rounded-lg focus:border-primary outline-none col-span-2 sm:col-span-1"
                    />
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Last Name"
                        className="bg-background dark:text-slate-300 p-3 border-2 border-border rounded-lg focus:border-primary outline-none col-span-2 sm:col-span-1"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="col-span-2 bg-background dark:text-slate-300 p-3 border-2 border-border rounded-lg focus:border-primary outline-none"
                        
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Your message"
                        rows="4"
                        className="col-span-2 bg-background dark:text-slate-300 p-3 border-2 border-border rounded-lg focus:border-primary outline-none"
                    ></textarea>
                    <Button label="Send Message" className="bg-primary text-white hover:bg-primary/90 col-span-2"/>
                </form>
            </div>
        </section>
    );
}

export default Contact;
