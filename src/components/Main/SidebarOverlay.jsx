import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../../App";

function SidebarOverlay() {
    return <div onClick={useContext(SidebarContext).toggleSidebar} className={`w-screen h-screen bg-background/80 fixed z-20 ${useContext(SidebarContext).isSidebarOpen ? 'backdrop-blur-xs pointer-events-auto opacity-100' : 'opacity-0 backdrop-blur[0] pointer-events-none'} transition-all`}></div>;
}

export default SidebarOverlay;
