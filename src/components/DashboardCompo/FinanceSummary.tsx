import { getCollection } from "@/lib/configs/database";
import getSession from "@/lib/configs/getSession";
import { PieChart, TrendingDown, TrendingUp, PiggyBank } from "lucide-react";

export default async function FinanceSummary() {
  const user = await getSession();
  const transacCollection = await getCollection("transactions");
  const transaction = await transacCollection
    ?.find({ userId: user.userId })
    .toArray();

  // income
  const incomeTransactions = transaction?.filter(
    (item) => item.name === "Income"
  );
  const totalIncome =
    incomeTransactions?.reduce((total, item) => {
      return total + item.amount;
    }, 0) || 0;

  // expense
  const expenseTransactions = transaction?.filter(
    (item) => item.name === "Expense"
  );
  const totalExpense =
    expenseTransactions?.reduce((total, item) => {
      return total + item.amount;
    }, 0) || 0;

  // savings
  const totalSavings = totalIncome - totalExpense;

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
  const totalBudget = monthlyBudget - totalExpense;

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-500">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Track your spending and manage your budget
        </p>
      </div>

      <div>
        <h1>HAHHAHAHAHA</h1>
        <p>ASBDBHASBFHDBSAH</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(34,197,94,1),0_-2px_2px_0_rgba(34,197,94,1),2px_0_2px_0_rgba(34,197,94,1),-2px_0_2px_0_rgba(34,197,94,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Total Income</h1>
            <TrendingUp className="text-green-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl text-green-600 font-bold">
              ₱ {totalIncome.toLocaleString()}
            </h1>
            <p className="text-sm text-gray-500">+12% from last month</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(239,68,68,1),0_-2px_2px_0_rgba(239,68,68,1),2px_0_2px_0_rgba(239,68,68,1),-2px_0_2px_0_rgba(239,68,68,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Total Expences</h1>
            <TrendingDown className="text-red-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl text-red-600 font-bold">
              ₱ {totalExpense.toLocaleString()}
            </h1>
            <p className="text-sm text-gray-500">-5% from last month</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(139,92,246,1),0_-2px_2px_0_rgba(139,92,246,1),2px_0_2px_0_rgba(139,92,246,1),-2px_0_2px_0_rgba(139,92,246,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Savings</h1>
            <PiggyBank className="text-violet-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl text-violet-600 font-bold">
              ₱ {totalSavings.toLocaleString()}
            </h1>
            <p className="text-sm text-gray-500">+25% from last month</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(59,130,246,1),0_-2px_2px_0_rgba(59,130,246,1),2px_0_2px_0_rgba(59,130,246,1),-2px_0_2px_0_rgba(59,130,246,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Budget Left</h1>
            <PieChart className="text-blue-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl text-blue-600 font-bold">₱ {totalBudget.toLocaleString()}</h1>
            <p className="text-sm text-gray-500">7% of monthly budget</p>
          </div>
        </div>
      </div>
    </>
  );
};
