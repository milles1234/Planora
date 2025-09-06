"use client"
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StoreProvider, { useAppSelector } from "../components/redux";



const DasboardLayout = ({children}: {children: React.ReactNode}) =>{
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) =>  state.global.isDarkMode);

    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    })

    return(
        <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
            {/* SIDEBAR */}
            <Sidebar/>
            <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
          isSidebarCollapsed ? "" : "md:pl-64"}`}>
                {/* NAVBAR */}
                <Navbar/>
                {children}
            </main>

        </div>
    )
}

 
const DasboardWrapper = ({children}: {children: React.ReactNode}) =>{
    return(
        <StoreProvider>
            <DasboardLayout>{children}</DasboardLayout>
        </StoreProvider>
    )
}

export default DasboardWrapper;