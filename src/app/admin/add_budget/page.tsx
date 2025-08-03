"use client";
import AddExpense from "@/components/transactionsCompo/AddExpense";
import AddIncome from "@/components/transactionsCompo/AddIncome";
import { PlusCircle, MinusCircle, CircleDollarSign } from "lucide-react";
import { useState } from "react";

export default function AddBudget() {
  const [transaction, setTransaction] = useState(true);

  return (
    <div className="p-5 border-l border-gray-200">
      <div className="mb-6">
        <h1 className="text-yellow-500 text-3xl font-bold">Add Transaction</h1>
        <p className="text-gray-500 mt-1">Record your income and expenses</p>
      </div>
      <div className="max-w-[550px] bg-white p-4 rounded-lg shadow-md">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <CircleDollarSign className="text-yellow-500 w-7 h-7"/>
            <h1 className="text-2xl font-semibold">New Transaction</h1>
          </div>
          <p className="text-gray-500 text-sm">
            Add a new income or expense to track your budget
          </p>
        </div>

        <div className="border w-full flex justify-around p-1.5 font-medium rounded-md mb-4">
          <button
            className={
              transaction
                ? `flex items-center justify-center gap-2 p-1 border border-red-300 rounded-md w-auto md:w-60 bg-red-50 px-6 cursor-pointer`
                : "flex items-center justify-center gap-2 p-1 border border-white rounded-md w-auto md:w-60 px-6 cursor-pointer"
            }
            onClick={() => setTransaction(true)}
          >
            <MinusCircle className="text-red-500 w-4 h-4" />
            <h1>Expense</h1>
          </button>
          <button
            className={
              !transaction
                ? `flex items-center justify-center gap-2 p-1 border border-green-300 rounded-md w-auto md:w-60 bg-green-50 px-6 cursor-pointer`
                : "flex items-center justify-center gap-2 p-1 border border-white rounded-md w-auto md:w-60 px-6 cursor-pointer"
            }
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
  );
}
