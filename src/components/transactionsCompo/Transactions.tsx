"use client";

import AddExpense from "@/components/transactionsCompo/AddExpense";
import AddIncome from "@/components/transactionsCompo/AddIncome";
import { useState } from "react";
import { PlusCircle, MinusCircle, } from "lucide-react";

export default function Transactions() {
  const [transaction, setTransaction] = useState(true);

  return (
    <div className="">
      <div>
        <div className="max-w-[500px] bg-white p-4 rounded-lg shadow-sm">
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-medium">New Transaction</h1>
            <p className="text-gray-500 text-sm sm:text-base font-medium">
              Track where your money goes
            </p>
          </div>

          <div className="border flex justify-around p-1.5 font-medium rounded-md mb-4">
            <button
              className={
                transaction
                  ? `flex items-center justify-center gap-2 p-1 border border-red-300 rounded-md w-1/2 bg-red-50 cursor-pointer transition-all duration-200`
                  : "flex items-center justify-center gap-2 p-1 border border-white rounded-md w-1/2 cursor-pointer"
              }
              type="button"
              onClick={() => setTransaction(true)}
            >
              <MinusCircle className="text-red-500 w-4 h-4" />
              <h1>Expense</h1>
            </button>
            <button
              className={
                !transaction
                  ? `flex items-center justify-center gap-2 p-1 border border-green-300 rounded-md w-1/2 bg-green-50 cursor-pointer transition-all duration-200`
                  : "flex items-center justify-center gap-2 p-1 border border-white rounded-md w-1/2 cursor-pointer"
              }
              type="button"
              onClick={() => setTransaction(false)}
            >
              <PlusCircle className="text-green-500 w-4 h-4" />
              <h1>Income</h1>
            </button>
          </div>

          {transaction ? (
            <AddExpense/>
          ) : (
            <AddIncome/>
          )}
        </div>
      </div>
    </div>
  );
}
