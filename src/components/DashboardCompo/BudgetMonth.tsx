"use client";

import { useState } from "react";

export default function BudgetMonth() {
  const [budget, setBudget] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setBudget(true)}
        className="text-blue-600 py01 px-2 rounded-md bg-blue-50 hover:bg-blue-100 cursor-pointer "
      >
        How much is your budget for this month?
      </button>

      <button
        onClick={() => setEdit(true)}
        className="py-1 px-2 bg-blue-50 hover:bg-blue-100 rounded-md text-blue-600 cursor-pointer "
      >
        You want to edit?
      </button>

      {budget ? (
        <form className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50">
          <div className="bg-white p-5 rounded-md shadow-md border border-blue-600">
            <div className="">
              <label htmlFor="budget">Amount (₱)</label>
              <input 
                type="number" 
                name="buget"
                id="budget"
                placeholder="0.00"
                className="w-full border py-2 px-3 rounded-md"
              />
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <button 
                className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer"
              >
                Done
              </button>

              <button 
                onClick={() => setBudget(false)}
                className="py-2 px-3 bg-blue-100 hover:bg-blue-200 rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </div>
      
          </div>
        </form>
      ) : (
        <></>
      )}

      {edit ? (
        <form className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50">
          <div className="bg-white p-5 rounded-md shadow-md border border-blue-600">
            <div className="">
              <label htmlFor="budget">Amount (₱)</label>
              <input 
                type="number" 
                name="buget"
                id="budget"
                placeholder="0.00"
                className="w-full border py-2 px-3 rounded-md"
              />
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <button 
                className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer"
              >
                Edit
              </button>

              <button 
                onClick={() => setEdit(false)}
                className="py-2 px-3 bg-blue-100 hover:bg-blue-200 rounded-md cursor-pointer"
              >
                Cancel
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