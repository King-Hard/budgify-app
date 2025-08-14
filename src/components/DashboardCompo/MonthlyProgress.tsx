import { getUserTransaction, calculateTotals, getUserBudget } from "@/lib/helpers/transactions";
import BudgetMonth from "@/components/DashboardCompo/BudgetMonth";

export default async function MonthlyProgress() {
  const {transactions, user} = await getUserTransaction();
  const monthlyBudget = await getUserBudget(user.userId);
  const {totalExpense} = calculateTotals(transactions);

  // percentage
  const budgetUsed = monthlyBudget > 0 ? (totalExpense / monthlyBudget) * 100 : 0;
  const budgetUsedWidth = Math.min(budgetUsed, 100);

  const statusConfig =
    budgetUsed > 80
      ? { bar: "bg-red-500", text: "text-red-500", bg: "bg-red-50" }
      : budgetUsed >= 50
      ? { bar: "bg-yellow-500", text: "text-yellow-500", bg: "bg-yellow-50" }
      : { bar: "bg-green-500", text: "text-green-500", bg: "bg-green-50" };

  return (
    <div className="w-full p-5 rounded-lg shadow-sm bg-white mt-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-medium">Monthly Budget Progress</h1>
        <BudgetMonth/>
      </div>
      <p className="text-gray-500 text-sm sm:text-base font-medium">
        You've spent ₱{totalExpense.toLocaleString()} of your ₱{monthlyBudget.toLocaleString()} budget
      </p>

      <div className="w-full bg-gray-200 h-3 rounded-full mt-5 mb-5">
        <div className={`${statusConfig.bar} h-3 rounded-full transition-all duration-500`} style={{ width: `${budgetUsedWidth}%` }} />
      </div>

      <div className="flex justify-between w-full text-sm items-center">
        <p className="text-gray-500 font-medium">₱{totalExpense.toLocaleString()}</p>
        <div className={`flex items-center gap-1 py-1 px-2 rounded-md ${statusConfig.bg}`}>
          <p className={`${statusConfig.text} font-medium`}>{Math.round(budgetUsed)}% used</p>
        </div>
        <p className="text-gray-500 font-medium">₱{monthlyBudget.toLocaleString()}</p>
      </div>
    </div>
  );
};