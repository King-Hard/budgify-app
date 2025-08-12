// src/components/AdminCompo/QuickStats.tsx
import { TrendingDown, TrendingUp } from "lucide-react";

interface QuickStatsProps {
  totalIncome: number;
  totalExpense: number;
}

export default function QuickStats({ totalIncome, totalExpense }: QuickStatsProps) {
  return (
    <>
      <div className="pt-9 pl-3">
        <h1 className="text-gray-500 text-sm font-semibold">QUICK STATS</h1>
      </div>
      <div className="pt-4">
        <div className="border border-green-400 rounded-md py-2 px-4 bg-green-50 transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between text-sm font-semibold gap-1 mb-1">
            <p className="">Income</p>
            <TrendingUp className="w-4 h-4 text-green-600"/>
          </div>
          <h1 className="font-bold text-xl text-green-600">₱{totalIncome.toLocaleString()}</h1>
        </div>
      </div>
      <div className="pt-2">
        <div className="border border-red-400 rounded-md py-2 px-4 bg-red-50 transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between text-sm font-semibold gap-1 mb-1">
            <p>Expenses</p>
            <TrendingDown className="w-4 h-4 text-red-600"/>
          </div>
          <h1 className="font-bold text-xl text-red-600">₱{totalExpense.toLocaleString()}</h1>
        </div>
      </div>
    </>
  );
};