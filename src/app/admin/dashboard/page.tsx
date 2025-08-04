"use client";

import BudgetMonth from "@/components/DashboardCompo/BudgetMonth";
import { Briefcase, CircleDollarSign, Laptop, PiggyBank, ShoppingCart, Target, TrendingDown, TrendingUp, Utensils } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Dashboard() {
  const monthRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    const currentMonth = now.toISOString().slice(0, 7);
    if (monthRef.current) {
      monthRef.current.value = currentMonth;
    }
  }, []);

  return (
    <div className="p-5 border-l border-gray-200">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-500">Dashboard</h1>
        <p className="text-gray-500 mt-1">Track your spending and manage your budget</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-medium">Total Income</h1>
            <TrendingUp className="text-green-600 w-5 h-5"/>
          </div>
          <div>
            <h1 className="text-2xl text-green-600 font-bold">₱ 35,000</h1>
            <p className="text-sm text-gray-500">+12% from last month</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-medium">Total Expences</h1>
            <TrendingDown className="text-red-600 w-5 h-5"/>
          </div>
          <div>
            <h1 className="text-2xl text-red-600 font-bold">₱ 10,000</h1>
            <p className="text-sm text-gray-500">-5% from last month</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-medium">Savings</h1>
            <PiggyBank className="text-violet-600 w-5 h-5"/>
          </div>
          <div>
            <h1 className="text-2xl text-violet-600 font-bold">₱ 15,000</h1>
            <p className="text-sm text-gray-500">+25% from last month</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-medium">Budget Left</h1>
            <Target className="text-yellow-600 w-5 h-5"/>
          </div>
          <div>
            <h1 className="text-2xl text-yellow-600 font-bold">₱ 10,000</h1>
            <p className="text-sm text-gray-500">7% of monthly budget</p>
          </div>
        </div>
      </div>

      <div className="w-full p-5 rounded-lg shadow-sm bg-white mt-6">
          <div className="flex items-center gap-2">
            <Target className="text-blue-500 "/>
            <h1 className="text-xl sm:text-2xl font-medium">Monthly Budget Progress</h1>
          </div>
        <div className="text-gray-500 ">
          <p className="text-sm sm:text-base">You've spent ₱10,000 of your ₱20,000 budget</p>
        </div>

        <div className="mb-6">
          <div className="w-full bg-gray-200 h-3 rounded-full mt-5 mb-5">
            <div className="bg-blue-500 h-3 rounded-full w-1/2"></div>
          </div>
            <div className="flex justify-between w-full text-sm">
            <p className="text-gray-500">₱10,000</p>
            <p className="text-red-500 font-medium">50% used</p>
            <p className="text-gray-500">₱20,000</p>
          </div>
        </div>

          <div className="flex">
            <BudgetMonth/>
          </div>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm w-full mt-6">
        <div>
          <div className="flex justify-between items-center"> 
            <div className="flex items-center gap-2">
              <CircleDollarSign className="text-yellow-600"/>
              <h1 className="text-xl sm:text-2xl font-medium">Transactions</h1>
            </div>    
            <input 
              type="month" 
              ref={monthRef} 
              className="px-2 py-1 text-sm sm:text-base rounded-md bg-slate-50"
            />
          </div>
          <p className="text-sm sm:text-base text-gray-500">Your latest financial activities</p>
        </div>

        <div className="mt-6">    
          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-slate-50">
            <div>
              <Utensils className="h-10 w-10 p-2.5 border border-red-200 rounded-md flex items-center text-red-500 bg-red-50"/>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">Launch at McDonald's</h1>
                <p className="text-md sm:text-lg font-bold text-red-600">-₱450</p>
              </div>

              <div>
                <h1>HAHAHAHA</h1>
                <p>AJSDOASdoads</p>
                <div>
                  <h1>adsadasd</h1>
                  <p>adad</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-sm sm:text-base">Today</h1>
                <p className="border border-gray-300 px-2 rounded-full text-[12px] sm:text-[14px] font-medium flex items-center">food</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-slate-50">
            <div>
              <ShoppingCart className="h-10 w-10 p-2.5 border border-red-200 rounded-md flex items-center text-red-500 bg-red-50"/>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">Clothes shopping</h1>
                <p className="text-md sm:text-lg font-bold text-red-600">-₱1200</p>
              </div>
              
              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-sm sm:text-base">1 day ago</h1>
                <p className="border border-gray-300 px-2 rounded-full text-[12px] sm:text-[14px] font-medium flex items-center">shopping</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-slate-50">
            <div>
              <Briefcase className="h-10 w-10 p-2.5 border border-green-200 rounded-md flex items-center text-green-500 bg-green-50"/>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">Monthly Salary</h1>
                <p className="text-md sm:text-lg font-bold text-green-600">+₱25,000</p>
              </div>
              
              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-sm sm:text-base">3 days ago</h1>
                <p className="border border-gray-300 px-2 rounded-full text-[12px] sm:text-[14px] font-medium flex items-center">salary</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-slate-50">
            <div>
              <Laptop className="h-10 w-10 p-2.5 border border-green-200 rounded-md flex items-center text-green-500 bg-green-50"/>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">Capstone Project</h1>
                <p className="text-md sm:text-lg font-bold text-green-600">+₱10,000</p>
              </div>
              
              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-sm sm:text-base">2 weeks ago</h1>
                <p className="border border-gray-300 px-2 rounded-full text-[12px] sm:text-[14px] font-medium flex items-center">freelance</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}; 