import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budgify - Smart Budgeting",
  description: "Track your expenses and manage your budget",
};

export default function Rootlayout({children} : {children: ReactNode}){
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        {/* Outer wrapper for margin and centering */}
        <div className="mb-0 mt-3 mr-3 ml-3 flex justify-center items-center">
          {/* Main container with visible full border */}
          <div className="w-full max-w-[1550px] h-[calc(100vh-24px)] border rounded-t-md bg-gray-50 shadow flex flex-col overflow-hidden">
            {/* Mac window style header */}
            <div className="flex justify-between items-center border-b p-1.5 rounded-t-md">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h1 className="text-[14px] font-bold">Budgify</h1>
              <div className="flex gap-2 items-center invisible">
                <div className="w-3 h-3 rounded-full"></div>
                <div className="w-3 h-3 rounded-full"></div>
                <div className="w-3 h-3 rounded-full"></div>
              </div>
            </div>

              <div>
                <h1>HAHAHAHHAA</h1>
                <p>JNAFJNAJEFNJEDE</p>
              </div>
              <div>
                
              </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto hide-scrollbar bg-gray-50">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};
