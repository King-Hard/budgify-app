import { cookies } from "next/headers";
import { decrypt } from "@/lib/configs/session";
import { getCollection } from "@/lib/configs/database";
import getSession from "@/lib/configs/getSession";
import AdminLayoutClient from "@/components/AdminCompo/AdminLayoutClient";
import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  // Session logic
  const session = (await cookies()).get("session")?.value;
  let email = "";

  if (session) {
    const decrypted = await decrypt(session);
    email = decrypted?.email || "";
  }

  // Data fetching for QuickStats
  const user = await getSession();
  const transacCollection = await getCollection("transactions");
  const transactions = await transacCollection
    ?.find({ userId: user.userId })
    .toArray();

  // Income
  const incomeTransactions = transactions?.filter(
    (item) => item.name === "Income"
  );
  const totalIncome =
    incomeTransactions?.reduce((total, item) => {
      return total + item.amount;
    }, 0) || 0;

  // Expense
  const expenseTransactions = transactions?.filter(
    (item) => item.name === "Expense"
  );
  const totalExpense =
    expenseTransactions?.reduce((total, item) => {
      return total + item.amount;
    }, 0) || 0;

  return (
    <AdminLayoutClient
      email={email}
      totalIncome={totalIncome}
      totalExpense={totalExpense}
    >
      {children}
    </AdminLayoutClient>
  );
};