"use client";

import { Pencil, SquarePen, Wallet } from "lucide-react";
import { useState } from "react";

export default function BudgetMonth() {
  const [edit, setEdit] = useState(false);

  return (
    <div className="flex">
      <button
        onClick={() => setEdit(true)}
        className="p-1 bg-gray-100 rounded-sm text-black cursor-pointer transition-shadow duration-300 hover:bg-white hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]"
      >
        <SquarePen className="w-5 h-5 text-slate-800"/>
      </button>

      <div>
        <h1>SAHDIUAhds</h1>
        <p>asdnkajds</p>
      </div>

      {edit ? (
        <form className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50 transition-all duration-500">
          <div className="bg-white p-5 rounded-md shadow-[0_2px_2px_0_rgba(59,130,246,1),0_-2px_2px_0_rgba(59,130,246,1),2px_0_2px_0_rgba(59,130,246,1),-2px_0_2px_0_rgba(59,130,246,1)]">
            <div className="mb-4">
              <div className="flex items-center gap-1">
                <Wallet className="text-blue-500"/>
                <h1 className="text-lg font-medium">We suggest a budget of ₱20,000</h1>
              </div>
              <p className="text-[15px] text-gray-500">You can edit this budget amount below.</p>
            </div>
            <div className="">
              <label>Amount (₱)</label>
              <input 
                required
                type="number" 
                name="buget"
                placeholder="0.00"
                className="w-full border py-2 px-3 rounded-md cursor-pointer"
              />
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <button 
                onClick={() => setEdit(false)}
                className="py-2 px-3 w-25 bg-blue-100 hover:bg-blue-200 rounded-md cursor-pointer transition-colors duration-300"
              >
                Cancel
              </button>

              <button 
                className="py-2 px-3 w-25 text-white bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer transition-colors duration-300"
              >
                Save
              </button>
            </div>
      
          </div>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};