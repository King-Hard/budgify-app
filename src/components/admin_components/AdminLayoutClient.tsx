"use client";

import Sidebar from "@/components/admin_components/Sidebar";
import ProfileDropdown from "@/components/ProfileDropdown";
import { Columns2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminLayoutClient({ 
  children, 
  email 
}: { 
  children: React.ReactNode;
  email: string;
}) {
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarWidth = sidebarOpen ? (isMobile ? 0 : 255) : 60;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out h-full`}
        style={{ width: sidebarWidth }}
      >
        <Sidebar isCollapsed={!sidebarOpen} />
      </div>

      {/* Mobile overlay when sidebar is open */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-col w-0 flex-1">
        {/* Fixed Header */}
        <div className="flex items-center justify-between py-1.5 px-4 h-[60px] border-b border-l border-gray-200 z-10">
          <div className="flex items-center gap-4">
            {!isMobile && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1 rounded-sm hover:bg-blue-100 hover:text-[#3786F2] transition-colors cursor-pointer"
              >
                <Columns2 className="w-5 h-5"/>
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
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};