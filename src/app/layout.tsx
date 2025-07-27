import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budgify - Smart Budgeting",
  description: "Track your expenses and manage your budget",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50` }>
        <div className="flex justify-between border border-b-0 rounded-t-md p-1.5 mt-3 ml-3 mr-3 mb-0">
          <div className="flex gap-2 items-center">
            <div className=" w-3 h-3 rounded-full bg-red-500"></div>
            <div className=" w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className=" w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div>
            <h1 className="flex justify-center items-center text-[14px] font-bold">Budgify</h1>
          </div>
          <div className="flex gap-2 items-center">
            <div className=" w-3 h-3 rounded-full "></div>
            <div className=" w-3 h-3 rounded-full "></div>
            <div className=" w-3 h-3 rounded-full "></div>
          </div>        
        </div>
        <div className="border ml-3 mr-3 mb-3">
          {children}
        </div>
      </body>
    </html>
  );
};