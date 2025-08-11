import { Circle } from "lucide-react";
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

  // bar color logic
  let barColor = "bg-green-500";
  let statusColor = "text-green-500";
  let statusBorder = "bg-green-50"
  if (budgetUsed >= 50 && budgetUsed <= 80) {
    barColor = "bg-yellow-500";
    statusColor = "text-yellow-500";
    statusBorder = "bg-yellow-50";
  } else if (budgetUsed > 80) {
    barColor = "bg-red-500";
    statusColor = "text-red-500";
    statusBorder = "bg-red-50";
  };

  return (
    <>
      <div className="w-full p-5 rounded-lg shadow-sm bg-white mt-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-medium">
              Monthly Budget Progress
            </h1>
          </div>
          <div>
            <BudgetMonth />
          </div>
        </div>
        <div className="text-gray-500 ">
          <p className="text-sm sm:text-base font-medium">
            You've spent ₱{totalExpense.toLocaleString()} of your ₱{monthlyBudget.toLocaleString()} budget
          </p>
        </div>

        <div className="">
          <div className="w-full bg-gray-200 h-3 rounded-full mt-5 mb-5">
            <div
              className={`${barColor} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${budgetUsedWidth}%` }}
            ></div>
          </div>
          <div className="flex justify-between w-full text-sm items-center">
            <p className="text-gray-500 font-medium">₱{totalExpense.toLocaleString()}</p>
            <div className={`flex items-center gap-1 py-1 px-2 rounded-md ${statusBorder}`}>
              <p className={`${statusColor} font-medium`}>
                {Math.round(budgetUsed)}% used
              </p>
            </div>
            <p className="text-gray-500 font-medium">₱{monthlyBudget.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div>
        <h1>NSIADIEUABFIH</h1>
        <p>asdabfkhewbf</p>
        <div>
          
        </div>
      </div>
    </>
  );
}
