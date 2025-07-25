import Sidebar from "@/components/admin_components/Sidebard";
import Image from "next/image";
import { assets } from "../assets/assets";

export default function Layout({children}) {
  return (
    <div className="flex">  
      <Sidebar/>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-1.5 sm:py-2 px-6 sm:px-12 max-h-[60px] border">
          <h1 className="text-lg sm:text-xl font-medium">Admin Panel</h1>
          <Image 
            src={assets.profile_icon} 
            width={40}
            alt=""
          />
        </div>
        {children}
      </div>
    </div>
  );
};