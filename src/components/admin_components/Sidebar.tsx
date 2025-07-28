import { Bell, CirclePlus, DollarSign, LayoutDashboard, Target, TrendingUp, Wallet } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isCollapsed: boolean;
}

export default function Sidebar({ isCollapsed }: SidebarProps) {
  if (isCollapsed) {
    // Icon-only version
    return (
      <div className="flex flex-col border-r border-gray-200 w-[61px] h-screen">
        <div className="px-2 py-[9.5px] flex justify-center border-b border-gray-200">
          <Wallet className="rounded-md w-10 h-10 p-2 text-white bg-[#3786F2]"/>
        </div>
        <div className="flex flex-col items-center py-6 space-y-4">
          <Link
            href="/admin/dashboard"
            className="p-3 rounded-md hover:bg-gray-200 hover:text-black cursor-pointer text-[#3786F2]"
            title="Dashboard"
          >
            <LayoutDashboard className="w-5 h-5"/>
          </Link>
          <Link
            href="/admin/add_budget"
            className="p-3 rounded-md hover:bg-gray-200 hover:text-black cursor-pointer text-[#3786F2]"
            title="Add Transaction"
          >
            <CirclePlus className="w-5 h-5"/>
          </Link>
          <Link
            href="/admin/bill_reminder"
            className="p-3 rounded-md hover:bg-gray-200 hover:text-black cursor-pointer text-[#3786F2]"
            title="Bill Reminder"
          >
            <Bell className="w-5 h-5"/>
          </Link>
          <Link
            href="/admin/goal_tracker"
            className="p-3 rounded-md hover:bg-gray-200 hover:text-black cursor-pointer text-[#3786F2]"
            title="Goal Tracker"
          >
            <Target className="w-5 h-5"/>
          </Link>
        </div>
        <div className="mt-auto mb-6 px-2 space-y-3">
          <div className="p-2 rounded-md bg-green-50 border border-green-400">
            <TrendingUp className="w-4 h-4 text-green-600 mx-auto"/>
          </div>
          <div className="p-2 rounded-md bg-red-50 border border-red-400">
            <DollarSign className="w-4 h-4 text-red-600 mx-auto"/>
          </div>
        </div>
      </div>
    );
  }

  // Full version (your original)
  return (
    <div className="border-r border-gray-200 flex flex-col w-[256px] h-screen">
      <div className="p-5 flex items-center gap-3 border-b border-gray-200">
        <Wallet className="rounded-md w-10 h-10 p-2 text-white bg-[#3786F2]"/>
        <div>
          <h1 className="text-xl font-bold text-[#3786F2]">Budgify</h1>
          <p className="text-[12px] text-gray-500">Smart budgeting made simple</p>
        </div>
      </div>
      <div className="pt-9 pl-8">
        <h1 className="text-gray-500 text-sm font-semibold">NAVIGATION</h1>
      </div>
      <div className="p-5 pt-3">
        <div className="text-[#3786F2] hover:text-black hover:bg-gray-100 font-semibold mt-1 ">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 border border-gray-200 rounded-md p-3"
          >
            <LayoutDashboard className="w-4 h-4"/>
            Dashboard
          </Link>
        </div>
        <div className="text-[#3786F2] hover:text-black hover:bg-gray-100 font-semibold mt-1 ">
          <Link
            href="/admin/add_budget"
            className="flex items-center gap-3 border border-gray-200 rounded-md p-3"
          >
            <CirclePlus className="w-4 h-4"/>
            Add Transaction
          </Link>
        </div>
        <div className="text-[#3786F2] hover:text-black hover:bg-gray-100 font-semibold mt-1  ">
          <Link
            href="/admin/bill_reminder"
            className="flex items-center gap-3 border border-gray-200 rounded-md p-3"
          >
            <Bell className="w-4 h-4"/>
            Bill Reminder
          </Link>
        </div>
        <div className="text-[#3786F2] hover:text-black hover:bg-gray-100 font-semibold mt-1 ">
          <Link
            href="/admin/goal_tracker"
            className="flex items-center gap-3 border border-gray-200 rounded-md p-3"
          >
            <Target className="w-4 h-4"/>
            Goal Tracker
          </Link>
        </div>
        <div className="pt-9 pl-3">
          <h1 className="text-gray-500 text-sm font-semibold">QUICK STATS</h1>
        </div>
        <div className="pt-4 ">
          <div className="border border-green-400 rounded-md p-2 bg-green-50">
            <div className="flex items-center text-sm font-semibold gap-2 text-green-600">
              <TrendingUp className="w-4 h-4"/>
              <p>Income</p>
            </div>
            <h1 className="font-bold text-lg">₱25,000</h1>
          </div>
        </div>
        <div className="pt-2 ">
          <div className="border border-red-400 rounded-md p-2 bg-red-50">
            <div className="flex items-center text-sm font-semibold gap-2 text-red-600">
              <DollarSign className="w-4 h-4"/>
              <p>Expenses</p>
            </div>
            <h1 className="font-bold text-lg">₱18,500</h1>
          </div>
        </div>
      </div>
    </div>
  );
}