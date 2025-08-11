import FinanceSummary from "@/components/DashboardCompo/FinanceSummary";
import MonthlyProgress from "@/components/DashboardCompo/MonthlyProgress";
import RecentTransactions from "@/components/DashboardCompo/RecentTransactions";

export default function Dashboard() {
  return (
    <div className="p-5 border-l border-gray-200">
      <FinanceSummary />
      <MonthlyProgress />
      <RecentTransactions/>
    </div>
  );
};
