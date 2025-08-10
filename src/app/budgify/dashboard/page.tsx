import FinanceSummary from "@/components/DashboardCompo/FinanceSummary";
import MonthDate from "@/components/DashboardCompo/MonthDate";
import MonthlyProgress from "@/components/DashboardCompo/MonthlyProgress";
import {
  Briefcase,
  CircleDollarSign,
  Laptop,
  ShoppingCart,
  Utensils,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-5 border-l border-gray-200">
      <FinanceSummary />
      <MonthlyProgress />

      <div className="bg-white p-5 rounded-lg shadow-sm w-full mt-6">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="text-yellow-600" />
              <h1 className="text-xl sm:text-2xl font-medium">Transactions</h1>
            </div>
            <MonthDate />
          </div>
          <p className="text-sm sm:text-base text-gray-500">
            Your latest financial activities
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-gray-50">
            <div>
              <Utensils className="h-10 w-10 p-2.5 border border-red-200 rounded-md flex items-center text-red-500 bg-red-50" />
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">
                  Launch at McDonald's
                </h1>
                <p className="text-md sm:text-lg font-medium text-red-600">
                  -₱450
                </p>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-sm sm:text-base">Today</h1>
                <p className="border border-gray-300 px-2 rounded-full text-[10px] sm:text-[13px]  font-medium flex items-center">
                  food
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-gray-50">
            <div>
              <ShoppingCart className="h-10 w-10 p-2.5 border border-red-200 rounded-md flex items-center text-red-500 bg-red-50" />
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">
                  Clothes shopping
                </h1>
                <p className="text-md sm:text-lg font-medium text-red-600">
                  -₱1200
                </p>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-sm sm:text-base">
                  1 day ago
                </h1>
                <p className="border border-gray-300 px-2 rounded-full text-[10px] sm:text-[13px]  font-medium flex items-center">
                  shopping
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-gray-50">
            <div>
              <Briefcase className="h-10 w-10 p-2.5 border border-green-200 rounded-md flex items-center text-green-500 bg-green-50" />
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">
                  Monthly Salary
                </h1>
                <p className="text-md sm:text-lg font-medium text-green-600">
                  +₱25,000
                </p>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-sm sm:text-base">
                  3 days ago
                </h1>
                <p className="border border-gray-300 px-2 rounded-full text-[10px] sm:text-[13px]  font-medium flex items-center">
                  salary
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-gray-50">
            <div>
              <Laptop className="h-10 w-10 p-2.5 border border-green-200 rounded-md flex items-center text-green-500 bg-green-50" />
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">
                  Capstone Project
                </h1>
                <p className="text-md sm:text-lg font-medium text-green-600">
                  +₱10,000
                </p>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-sm sm:text-base">
                  2 weeks ago
                </h1>
                <p className="border border-gray-300 px-2 rounded-full text-[10px] sm:text-[13px]  font-medium flex items-center">
                  freelance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
