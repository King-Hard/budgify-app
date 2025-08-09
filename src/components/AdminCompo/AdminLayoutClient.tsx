"use client";

import Sidebar from "@/components/AdminCompo/Sidebar";
import ProfileDropdown from "@/components/ProfileDropdown";
import { Columns2 } from "lucide-react";
import { useState, useEffect } from "react";
import { ReactNode } from "react";

export default function AdminLayoutClient({children, email,}: {children: ReactNode; email: string;}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = sidebarOpen ? (isMobile ? 0 : 255) : 60;

  return (
    <div className="flex flex-1 min-h-0 h-full">
      {/* Sidebar - static, no scroll */}
      <div
        className="h-full transition-normal duration-100 ease-in-out"
        style={{ width: sidebarWidth }}
      >
        <Sidebar isCollapsed={!sidebarOpen} />
      </div>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main area */}
      <div className="relative flex flex-col flex-1 min-h-0">
        {/* Fixed Header */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between py-1.5 px-4 h-[60px] border-b border-l border-gray-200 bg-white/20 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            {!isMobile && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1 rounded-sm hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                <Columns2 className="w-5 h-5" />
              </button>
            )}
            <h1 className="font-medium">Financial Dashboard</h1>
          </div>
          {email ? (
            <ProfileDropdown email={email} />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          )}
        </div>

        {/* Scrollable content only */}
        <div className="flex-1 overflow-y-auto pt-[55px] hide-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
