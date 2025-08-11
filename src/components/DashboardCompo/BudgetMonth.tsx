"use client";

import { budget } from "@/lib/controllers/budgetAuth";
import { SquarePen, Wallet } from "lucide-react";
import { useActionState, useState, useEffect } from "react";

export default function BudgetMonth() {
  const [state, action] = useActionState(budget, undefined);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setEdit(false); // Close the modal
    }
  }, [state]);

  return (
    <div className="flex">
      <button
        onClick={() => setEdit(true)}
        className="p-1 bg-gray-100 rounded-sm cursor-pointer transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]"
      >
        <SquarePen className="w-5 h-5 text-slate-800"/>
      </button>

      {edit ? (
        <form 
          action={action}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 z-50 transition-all duration-500"
        >
          <div className="bg-white p-5 rounded-md shadow-[0_2px_2px_0_rgba(59,130,246,1),0_-2px_2px_0_rgba(59,130,246,1),2px_0_2px_0_rgba(59,130,246,1),-2px_0_2px_0_rgba(59,130,246,1)]">
            <div className="mb-4">
              <h1 className="text-xl font-medium text-center">Recommended budget ₱20,000</h1>
              <p className="text-[15px] text-gray-500 font-medium text-center">change your monthly budget anytime.</p>
            </div>
            <div className="">
              <label className="font-medium">Amount (₱)</label>
              <input 
                defaultValue={state?.amount}
                required
                type="number" 
                name="amount"
                placeholder="0.00"
                className="w-full border py-2 px-3 rounded-md cursor-pointer"
              />

              {state?.errors?.amount && (
                <p className="text-sm text-red-600">{state.errors.amount}</p>
              )}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <button 
                type="button"
                onClick={() => setEdit(false)}
                className="py-2 px-3 w-25 bg-blue-100 hover:bg-blue-200 rounded-md cursor-pointer transition-colors duration-300"
              >
                Cancel
              </button>

              <button 
                type="submit"
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