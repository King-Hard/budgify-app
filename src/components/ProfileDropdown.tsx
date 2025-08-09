// components/ProfileDropdown.tsx
"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/controllers/authentication";
import { LogOut, Mail } from "lucide-react";

export default function ProfileDropdown({ email }: { email: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const initial = email.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="User menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          className="flex items-center justify-center w-10 h-10 rounded-md shadow-md bg-blue-600 text-white font-medium cursor-pointer transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]"
        >
          {initial}
        </button>
      </div>
      
      {isOpen && (
        <div 
          role="menu"
          aria-orientation="vertical"
          className="py-1 absolute right-0 mt-2.5 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200"
        >
          <div className="flex items-center gap-1 px-4 py-2 border-b" role="none">
            <Mail className="w-4 h-4"/>
            <p className="text-sm font-medium truncate" role="status">{email}</p>
          </div>
          <button
            onClick={handleLogout}
            role="menuitem"
            className="flex items-center gap-1 w-full text-left px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 hover:text-red-600 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4"/>
            Log out
          </button>
        </div>
      )}
    </div>
  );
}