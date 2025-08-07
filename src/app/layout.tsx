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
        <div className="mb-0 mt-0 mr-0 ml-0 flex justify-center items-center">
          {/* Main container with visible full border */}
          <div className="w-full max-w-[1550px] h-[calc(103.5vh-24px)] bg-gray-50 shadow flex flex-col overflow-hidden">
            <div className="flex justify-center items-center border-b p-1.5 rounded-t-md">
              <h1 className="text-[14px] font-bold">Budgify</h1>
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
