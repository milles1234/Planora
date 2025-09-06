
"use client";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Home,
  LockIcon,
  LucideIcon,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import Link from "next/link";
import { setSidebarCollapsed } from "@/state";
import { useGetProjectsQuery } from "@/state/api";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const { data: projects } = useGetProjectsQuery();
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full shadow-xl transition-all duration-300 
        dark:bg-black bg-white overflow-y-auto z-40 
        ${isSidebarCollapsed ? "w-0" : "w-64"}`}
      >
        {!isSidebarCollapsed && (
          <div className="flex h-full flex-col justify-start">
            {/* TOP LOGO + CLOSE BTN */}
            <div className="z-50 flex min-h-[56px] w-full items-center justify-between px-6 pt-3">
              <div className="text-xl font-bold text-gray-600 dark:text-white">
                editlist
              </div>
              <button
                className="py-3"
                onClick={() =>
                  dispatch(setSidebarCollapsed(!isSidebarCollapsed))
                }
              >
                <X className="h-6 w-6 text-gray-800 cursor-pointer hover:text-gray-500 dark:text-white" />
              </button>
            </div>

            {/* TEAM */}
            <div className="flex items-center gap-5 border-y border-gray-200 px-8 py-4 dark:border-gray-700">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <div>
                <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
                  Dee Team
                </h3>
                <div className="mt-1 flex items-start gap-2">
                  <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-100" />
                  <p className="text-xs text-gray-500">Private</p>
                </div>
              </div>
            </div>

            {/* NAVBAR LINKS */}
            <nav className="z-10 w-full">
              <SidebarLink icon={Home} label="Home" href="/" />
              
              <SidebarLink icon={Search} label="Search" href="/search" />
              <SidebarLink icon={Settings} label="Settings" href="/settings" />
              <SidebarLink icon={User} label="Users" href="/users" />
              <SidebarLink icon={Users} label="Teams" href="/teams" />
            </nav>

            {/* PROJECTS */}
            <button
              onClick={() => setShowProjects((prev) => !prev)}
              className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
            >
              <span>Projects</span>
              {showProjects ? (
                <ChevronUp className="h-5 w-5 cursor-pointer" />
              ) : (
                <ChevronDown className="h-5 w-5 cursor-pointer" />
              )}
            </button>
            {showProjects &&
              projects?.map((project) => (
                <SidebarLink
                  key={project.id}
                  icon={Briefcase}
                  label={project.name}
                  href={`/projects/${project.id}`}
                />
              ))}

            {/* PRIORITY */}
            <button
              onClick={() => setShowPriority((prev) => !prev)}
              className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
            >
              <span>Priority</span>
              {showPriority ? (
                <ChevronUp className="h-5 w-5 cursor-pointer" />
              ) : (
                <ChevronDown className="h-5 w-5 cursor-pointer" />
              )}
            </button>
            {showPriority && (
              <>
                <SidebarLink
                  icon={AlertCircle}
                  label="Urgent"
                  href="/priority/urgent"
                />
                <SidebarLink
                  icon={ShieldAlert}
                  label="High"
                  href="/priority/high"
                />
                <SidebarLink
                  icon={AlertTriangle}
                  label="Medium"
                  href="/priority/medium"
                />
                <SidebarLink
                  icon={Settings}
                  label="Low"
                  href="/priority/low"
                />
                <SidebarLink
                  icon={AlertOctagon}
                  label="Backlog"
                  href="/priority/backlog"
                />
              </>
            )}
          </div>
        )}
      </div>

      {/* TOGGLE BUTTON (always visible) */}
      {isSidebarCollapsed && (
        <button
          className="fixed top-4 left-4 z-50"
          onClick={() => dispatch(setSidebarCollapsed(false))}
        >
          <ChevronRight className="h-6 w-6 text-gray-800 dark:text-white" />
        </button>
      )}
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors 
        hover:bg-gray-100 dark:hover:bg-gray-700 
        ${isActive ? "bg-gray-100 dark:bg-gray-600" : ""} 
        justify-start px-8 py-3`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-full w-[5px] bg-blue-200" />
        )}
        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span className="font-medium text-gray-800 dark:text-gray-100">
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;
