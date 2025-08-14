import { getCollection } from "@/lib/configs/database";
import getSession from "@/lib/configs/getSession";

export async function getUserTransaction() {
  const user = await getSession();
  const transacCollection = await getCollection("transactions");
  const transactions = await transacCollection
    ?.find({userId: user.userId})
    .sort({createdAt: -1})
    .toArray();
  return {transactions, user};
};

export async function getUserBudget(userId: string) {
  const budgetCollection = await getCollection("budgets");
  let budget = await budgetCollection?.findOne({userId});

  if(!budget) {
    const defaultBudget = {
      userId,
      monthlyBudget: 20000,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await budgetCollection?.insertOne(defaultBudget);
    budget = defaultBudget;
  };
  return budget.monthlyBudget;
};

export function calculateTotals(transactions: any[]) {
  const income = transactions.filter((t) => t.name === "Income");
  const expense = transactions.filter((t) => t.name === "Expense");

  const totalIncome = income.reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = expense.reduce((sum, t) => sum + t.amount, 0);
  const totalSavings = totalIncome - totalExpense;

  return { totalIncome, totalExpense, totalSavings };
};

