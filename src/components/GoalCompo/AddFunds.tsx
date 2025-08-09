"use client";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function AddFunds() {
  const [funds, setFunds] = useState(false);

  return (
    <div>
      <button
        onClick={() => setFunds(true)}
        className="flex items-center justify-center gap-2 text-white font-medium px-2 py-3 bg-orange-600 hover:bg-orange-700 rounded-md w-full cursor-pointer transition-colors duration-300"
      >
        <Plus className=""/>
        Add Funds
      </button>

      {funds ? (
        <div>
          <form className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50 transition-all duration-500">
            <div className="bg-white p-5 rounded-md shadow-[0_2px_2px_0_rgba(294,155,22,1),0_-2px_2px_0_rgba(294,155,22,1),2px_0_2px_0_rgba(294,155,22,1),-2px_0_2px_0_rgba(294,155,22,1)]">
              <div className="">
                <label>Amount (₱)</label>
                <input 
                  required
                  type="number" 
                  name="buget"
                  placeholder="0.00"
                  className="w-full border py-2 px-3 rounded-md"
                />   
              </div>

              <div className="flex justify-center gap-2 mt-4">
                <button 
                  onClick={() => setFunds(false)}
                  className="py-2 px-3 w-25 bg-orange-100 hover:bg-orange-200 rounded-md cursor-pointer transition-colors duration-300"
                >
                  Cancel
                </button>

                <button 
                  className="py-2 px-3 w-25 text-white bg-orange-600 hover:bg-orange-700 rounded-md cursor-pointer transition-colors duration-300"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};