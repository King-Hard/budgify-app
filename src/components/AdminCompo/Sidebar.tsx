import { Bell, CircleDollarSign, CirclePlus, DollarSign, LayoutDashboard, Target, TrendingUp, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isCollapsed: boolean;
}

export default function Sidebar({ isCollapsed }: SidebarProps) {
  const pathName = usePathname();

  if (isCollapsed) {
    return (
      <div className="flex flex-col border-r border-gray-200 w-[61px] h-full">
        <div className="px-2 py-[9.5px] flex justify-center border-b border-gray-200">
          <Wallet className="rounded-md w-10 h-10 p-2 text-white bg-blue-600" />
        </div>
        <div className="flex flex-col items-center py-5 space-y-2">
          <Link
            href="/budgify/dashboard"
            className={`p-3 rounded-md cursor-pointer ${pathName === "/budgify/dashboard" 
              ? "bg-blue-50 text-blue-600 border border-blue-500" 
              : "text-black border border-gray-200 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition-colors duration-200"}`}
            title="Dashboard"
          >
            <LayoutDashboard className="w-5 h-5" />
          </Link>
          <Link
            href="/budgify/budget"
            className={`p-3 rounded-md cursor-pointer ${pathName === "/budgify/budget" 
              ? "bg-yellow-50 text-yellow-600 border border-yellow-500" 
              : "text-black border border-gray-200 hover:text-yellow-600 hover:bg-yellow-50 hover:border-yellow-500 transition-colors duration-200"}`}
            title="Add Transaction"
          >
            <CircleDollarSign className="w-5 h-5" />
          </Link>
          <Link
            href="/budgify/bill"
            className={`p-3 rounded-md cursor-pointer ${pathName === "/budgify/bill" 
              ? "bg-violet-50 text-violet-600 border border-violet-500" 
              : "text-black border border-gray-200 hover:text-violet-600 hover:bg-violet-50 hover:border-violet-500 transition-colors duration-200"}`}
            title="Bill Reminder"
          >
            <Bell className="w-5 h-5" />
          </Link>
          <Link
            href="/budgify/goal"
            className={`p-3 rounded-md cursor-pointer ${pathName === "/budgify/goal" 
              ? "bg-orange-50 text-orange-600 border border-orange-500" 
              : "text-black border border-gray-200 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 transition-colors duration-200"}`}
            title="Goal Tracker"
          >
            <Target className="w-5 h-5" />
          </Link>
        </div>
        <div className="mb-6 px-2 space-y-3 mt-20">
          <div className="p-2 rounded-md bg-green-50 border border-green-400 transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]">
            <TrendingUp className="w-4 h-4 text-green-600 mx-auto" />
          </div>
          <div className="p-2 rounded-md bg-red-50 border border-red-400 transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]">
            <DollarSign className="w-4 h-4 text-red-600 mx-auto" />
          </div>
        </div>
      </div>
    );
  };

  // Full version (your original)
  return (
    <div className="border-r border-gray-200 flex flex-col w-[256px] h-full">
      <div className="p-5 flex items-center gap-3 border-b border-gray-200">
        <Wallet className="rounded-md w-10 h-10 p-2 text-white bg-blue-600"/>
        <div>
          <h1 className="text-xl font-bold text-blue-600">Budgify</h1>
          <p className="text-[12px] text-gray-500">Smart budgeting made simple</p>
        </div>
      </div>
      <div className="pt-9 pl-8">
        <h1 className="text-gray-500 text-sm font-semibold">NAVIGATION</h1>
      </div>
      <div className="p-5 pt-3">
        <div className={`${pathName === "/budgify/dashboard" 
          ? "text-blue-600 bg-blue-50 border border-blue-500 font-medium mt-1 rounded-md" 
          : "font-medium mt-1 rounded-md border border-gray-200 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition-colors duration-200"}`}>
          <Link
            href="/budgify/dashboard"
            className="flex items-center gap-3 p-3"
          >
            <LayoutDashboard className="w-4 h-4"/>
            Dashboard
          </Link>
        </div>
        <div className={`${pathName === "/budgify/budget" 
          ? "text-yellow-600 bg-yellow-50 border border-yellow-500 font-medium mt-1 rounded-md" 
          : "font-medium mt-1 rounded-md border border-gray-200 hover:text-yellow-600 hover:bg-yellow-50 hover:border-yellow-500 transition-colors duration-200"}`}>
          <Link
            href="/budgify/budget"
            className="flex items-center gap-3 p-3"
          >
            <CircleDollarSign className="w-4 h-4"/>
            Transaction
          </Link>
        </div>
        <div className={`${pathName === "/budgify/bill" 
          ? "text-violet-600 bg-violet-50 border border-violet-500 font-medium mt-1 rounded-md" 
          : "font-medium mt-1 rounded-md border border-gray-200 hover:text-violet-600 hover:bg-violet-50 hover:border-violet-500 transition-colors duration-200"}`}>
          <Link
            href="/budgify/bill"
            className="flex items-center gap-3 p-3"
          >
            <Bell className="w-4 h-4"/>
            Bill Reminder
          </Link>
        </div>
        <div className={`${pathName === "/budgify/goal" 
          ? "text-orange-600 bg-orange-50 border border-orange-500 font-medium mt-1 rounded-md" 
          : "font-medium mt-1 rounded-md border border-gray-200 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-500 transition-colors duration-200"}`}>
          <Link
            href="/budgify/goal"
            className="flex items-center gap-3 p-3"
          >
            <Target className="w-4 h-4"/>
            Goal Tracker
          </Link>
        </div>
        <div className="pt-9 pl-3">
          <h1 className="text-gray-500 text-sm font-semibold">QUICK STATS</h1>
        </div>
        <div className="pt-4">
          <div className="border border-green-400 rounded-md py-2 px-4 bg-green-50 transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]">
            <div className="flex items-center text-sm font-semibold gap-2 mb-1 text-green-600">
              <TrendingUp className="w-4 h-4"/>
              <p>Income</p>
            </div>
            <h1 className="font-bold text-lg ">₱25,000</h1>
          </div>
        </div>
        <div className="pt-2">
          <div className="border border-red-400 rounded-md py-2 px-4 bg-red-50 transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]">
            <div className="flex items-center text-sm font-semibold gap-2 mb-1 text-red-600">
              <DollarSign className="w-4 h-4"/>
              <p>Expenses</p>
            </div>
            <h1 className="font-bold text-lg">₱10,000</h1>
          </div>
        </div>
      </div>
    </div>
  );
}