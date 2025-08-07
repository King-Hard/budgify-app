"use client";

import { SquarePen, Wallet } from "lucide-react";
import { useState } from "react";

export default function BudgetMonth() {
  const [edit, setEdit] = useState(false);

  return (
    <div className="flex">
      <button
        onClick={() => setEdit(true)}
        className="p-1 bg-blue-100 hover:bg-blue-200 rounded-sm text-blue-500 cursor-pointer"
      >
        <SquarePen className="w-5 h-5"/>
      </button>

      <div>
        <div>
          <h1></h1>
        </div>
      </div>

      {edit ? (
        <form className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50">
          <div className="bg-white p-5 rounded-md shadow border border-blue-300 shadow-blue-200">
            <div className="mb-4">
              <div className="flex items-center gap-1">
                <Wallet className="text-blue-500"/>
                <h1 className="text-lg font-medium">We suggest a budget of ₱20,000</h1>
              </div>
              <p className="text-[15px] text-gray-500">You can edit this amount below.</p>
            </div>
            <div className="">
              <label htmlFor="budget">Amount (₱)</label>
              <input 
                type="number" 
                name="buget"
                id="budget"
                placeholder="0.00"
                className="w-full border py-2 px-3 rounded-md cursor-pointer"
              />
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <button 
                onClick={() => setEdit(false)}
                className="py-2 px-3 w-25 bg-blue-100 hover:bg-blue-200 rounded-md cursor-pointer"
              >
                Cancel
              </button>

              <button 
                className="py-2 px-3 w-25 text-white bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer"
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