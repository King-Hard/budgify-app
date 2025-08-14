import { TrendingDown, TrendingUp, PiggyBank, Wallet } from "lucide-react";
import { getUserTransaction, calculateTotals, getUserBudget } from "@/lib/helpers/transactions";

export default async function FinanceSummary() {
  const {transactions, user} = await getUserTransaction();
  const monthlyBudget = await getUserBudget(user.userId);
  const {totalIncome, totalExpense, totalSavings} = calculateTotals(transactions);
  const totalBudget = monthlyBudget - totalExpense;

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-500">Dashboard</h1>
        <p className="text-gray-500 mt-1 font-medium">
          Track your spending and manage your budget
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(34,197,94,1),0_-2px_2px_0_rgba(34,197,94,1),2px_0_2px_0_rgba(34,197,94,1),-2px_0_2px_0_rgba(34,197,94,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Total Income</h1>
            <TrendingUp className="text-green-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl text-green-600 font-bold">
              ₱{totalIncome.toLocaleString()}
            </h1>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(239,68,68,1),0_-2px_2px_0_rgba(239,68,68,1),2px_0_2px_0_rgba(239,68,68,1),-2px_0_2px_0_rgba(239,68,68,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Total Expences</h1>
            <TrendingDown className="text-red-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl text-red-600 font-bold">
              ₱{totalExpense.toLocaleString()}
            </h1>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(139,92,246,1),0_-2px_2px_0_rgba(139,92,246,1),2px_0_2px_0_rgba(139,92,246,1),-2px_0_2px_0_rgba(139,92,246,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Savings</h1>
            <PiggyBank className="text-violet-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl text-violet-600 font-bold"> 
              ₱{totalSavings > 0 ? totalSavings.toLocaleString() : 0}             
            </h1>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(59,130,246,1),0_-2px_2px_0_rgba(59,130,246,1),2px_0_2px_0_rgba(59,130,246,1),-2px_0_2px_0_rgba(59,130,246,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Budget Left</h1>
            <Wallet className="text-blue-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl text-blue-600 font-bold">
              ₱{totalBudget > 0 ? totalBudget.toLocaleString() : 0}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
