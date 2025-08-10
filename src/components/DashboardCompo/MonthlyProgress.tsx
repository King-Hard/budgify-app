import { PieChart } from "lucide-react";
import BudgetMonth from "./BudgetMonth";
import { getCollection } from "@/lib/configs/database";
import getSession from "@/lib/configs/getSession";

export default async function MonthlyProgress() {
  const user = await getSession();

  // budget
  const budgetCollection = await getCollection("budgets");
  let userBudget = await budgetCollection?.findOne({ userId: user.userId });

  if (!userBudget) {
    const defaultBudget = {
      userId: user.userId,
      monthlyBudget: 20000, // default
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await budgetCollection?.insertOne(defaultBudget);
    userBudget = defaultBudget;
  }
  const monthlyBudget = userBudget.monthlyBudget;

  // expense
  const transacCollection = await getCollection("transactions");
  const transactions = await transacCollection
    ?.find({ userId: user.userId })
    .toArray();

  const expenseTransactions = transactions?.filter(
    (item) => item.name === "Expense"
  );

  const totalExpense =
    expenseTransactions?.reduce((total, item) => {
      return total + item.amount;
    }, 0) || 0;

  // percentage
  const budgetUsed = monthlyBudget > 0 ? (totalExpense / monthlyBudget) * 100 : 0;
  const budgetUsedWidth = Math.min(budgetUsed, 100); 

  return (
    <>
      <div className="w-full p-5 rounded-lg shadow-sm bg-white mt-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <PieChart className="text-blue-500 " />
            <h1 className="text-xl sm:text-2xl font-medium">
              Monthly Budget Progress
            </h1>
          </div>
          <div>
            <BudgetMonth />
          </div>
        </div>
        <div className="text-gray-500 ">
          <p className="text-sm sm:text-base">
            You've spent ₱ {totalExpense.toLocaleString()} of your ₱ {monthlyBudget.toLocaleString()} budget
          </p>
        </div>

        <div className="mb-6">
          <div className="w-full bg-gray-200 h-3 rounded-full mt-5 mb-5">
            <div 
              className="bg-blue-500 h-3 rounded-full w-1/2"
              style={{ width: `${budgetUsedWidth}%` }}
            >
            </div>
          </div>
          <div className="flex justify-between w-full text-sm">
            <p className="text-gray-500">₱ {totalExpense.toLocaleString()}</p>
            <p className="text-red-500 font-medium">{Math.round(budgetUsed)}% used</p>
            <p className="text-gray-500">₱ {monthlyBudget.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
}
