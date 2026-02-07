import React from "react";
import { LoadingContext } from "../../App.jsx";
import { useContext } from "react";
import FooterSkeleton from "./FooterSkeleton.jsx";

function Footer() {
    const loading = useContext(LoadingContext).isLoading;
    if (loading) return <FooterSkeleton />;
    return (
        <footer className=" border-t border-t-border w-full py-12">
            <div className="flex justify-between max-w-300 px-6 mx-auto items-center flex-col gap-4 sm:flex-row">
                <div>
                    <div className="logo-container flex justify-center items-center gap-2">
                        <div className="bg-slate-300 dark:bg-slate-800 dark:border border-border p-1.5 flex items-center justify-center rounded-lg">
                            <span className="material-symbols-outlined text-l leading-none">
                                code
                            </span>
                        </div>
                        <span className="title font-bold text-base tracking-tight">
                            Mudabbir Alam
                        </span>
                    </div>
                </div>
                <div className="text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} Mudabbir Alam. All rights
                    reserved.
                </div>
                <div className="flex gap-4 text-xl text-slate-500">
                    <span className="material-symbols-outlined hover:text-blue-p hover:cursor-pointer">
                        hub
                    </span>
                    <span className="material-symbols-outlined hover:text-blue-p hover:cursor-pointer">
                        alternate_email
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
