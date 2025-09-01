"use client";

import AddBill from "@/components/BIllCompo/AddBill";
import { 
  Banknote, 
  Bell, 
  CheckCircle, 
  Clock, 
  House, 
  Plus, 
  TriangleAlert, 
  Tv, 
  Wifi, 
  Zap 
} from "lucide-react";

import { useState, useRef, useEffect } from "react";

export default function BillReminder() {
  const [reminder, setReminder] = useState(false);

  const handleCloseForm = () => {
    setReminder(false);
  };

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
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-violet-500">Bill Reminders</h1>
          <p className="text-gray-500 mt-1 font-medium">Never miss a payment again</p>
        </div>

        <div>
          <button 
            onClick={() => setReminder(prev => !prev)}
            className="flex justify-center items-center gap-2 py-2 px-3 w-32 text-white font-medium rounded-md cursor-pointer bg-violet-500 hover:bg-violet-600 transition-colors duration-300"
          >
            <Plus className="w-5 h-5 text-white"/>
            New Bill
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(34,197,94,1),0_-2px_2px_0_rgba(34,197,94,1),2px_0_2px_0_rgba(34,197,94,1),-2px_0_2px_0_rgba(34,197,94,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Paid</h1>
            <CheckCircle className="text-green-600 w-5 h-5"/>
          </div>
          <div>
            <h1 className="text-2xl text-green-600 font-bold">1</h1>
            <p className="text-sm text-gray-500">Payment Confirmed</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(239,68,68,1),0_-2px_2px_0_rgba(239,68,68,1),2px_0_2px_0_rgba(239,68,68,1),-2px_0_2px_0_rgba(239,68,68,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Overdue</h1>
            <TriangleAlert className="text-red-600 w-5 h-5"/>
          </div>
          <div>
            <h1 className="text-2xl text-red-600 font-bold">2</h1>
            <p className="text-sm text-gray-500">Bills to pay now</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(234,179,8,1),0_-2px_2px_0_rgba(234,179,8,1),2px_0_2px_0_rgba(234,179,8,1),-2px_0_2px_0_rgba(234,179,8,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Upcoming Bills</h1>
            <Clock className="text-yellow-600 w-5 h-5"/>
          </div>
          <div>
            <h1 className="text-2xl text-yellow-600 font-bold">₱ 25,000</h1>
            <p className="text-sm text-gray-500">This month</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(139,92,246,1),0_-2px_2px_0_rgba(139,92,246,1),2px_0_2px_0_rgba(139,92,246,1),-2px_0_2px_0_rgba(139,92,246,1)]">
          <div className="flex justify-between">
            <h1 className="font-medium">Total Bills</h1>
            <Bell className="text-violet-600 w-5 h-5"/>
          </div>
          <div>
            <h1 className="text-2xl text-violet-600 font-bold">5</h1>
            <p className="text-sm text-gray-500">Active reminders</p>
          </div>
        </div>
      </div>

      <div>
        {reminder ? (
          <AddBill onCancel={handleCloseForm}/>
        ) : (
          <></>
        )}
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm w-full mt-6">
        <div>
          <div className="flex justify-between items-center"> 
            <div className="flex items-center gap-2">
              <Bell className="text-violet-600"/>
              <h1 className="text-xl sm:text-2xl font-medium">Your Bills</h1>
            </div>    
            <input 
              type="month" 
              ref={monthRef} 
              className="px-2 py-1 rounded-md text-sm sm:text-base bg-slate-50 cursor-pointer transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]"
            />
          </div>
          <p className="text-sm sm:text-base text-gray-500 font-medium">Manage your recurring payments and reminders</p>
        </div>

        <div className="mt-6">    
          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-slate-50">
            <div>
              <Zap className="h-10 w-10 p-2.5 border border-violet-200 rounded-md flex items-center text-violet-500 bg-violet-50"/>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">Electric Bill</h1>
                <p className="text-md sm:text-lg font-bold">₱2,500</p>
              </div>
              
              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-[12px] sm:text-base">Due: 8/2/2025</h1>

                <div className="flex gap-2">
                  <div className="flex items-center justify-center border border-yellow-200 bg-yellow-50 text-yellow-500 px-1 sm:px-2 rounded-full gap-1">
                    <Clock className="h-3 w-3 sm:w-4 sm:h-4"/>
                    <p className="text-[10px] sm:text-[13px] font-medium">Due Soon</p>
                  </div>
                  <p className="text-[10px] sm:text-[13px] flex items-center text-yellow-500">3 days left</p>
                </div>
              </div>   

            </div>
          </div>

          <div>
            <h1>
              hahahaha
            </h1>
            <p>
              HAHAHAHA
            </p>
            <div>
              <h1>
                
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-gray-50">
            <div>
              <Wifi className="h-10 w-10 p-2.5 border border-violet-200 rounded-md flex items-center text-violet-500 bg-violet-50"/>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">Internet Bill</h1>
                <p className="text-md sm:text-lg font-bold">₱1,500</p>
              </div>
              
              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-[12px] sm:text-base">Due: 7/29/2025</h1>

                <div className="flex gap-1 sm:gap-2">
                  <div className="flex items-center justify-center border border-yellow-200 bg-yellow-50 text-yellow-500 px-1 sm:px-2 rounded-full gap-1">
                    <Clock className="h-3 w-3 sm:w-4 sm:h-4"/>
                    <p className="text-[10px] sm:text-[13px] font-medium">Due Soon</p>
                  </div>
                  <p className="text-[10px] sm:text-[13px] flex items-center text-yellow-500">8 days left</p>
                </div>
              </div>   
              
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-gray-50">
            <div>
              <Banknote className="h-10 w-10 p-2.5 border border-violet-200 rounded-md flex items-center text-violet-500 bg-violet-50"/>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">Loan Payment</h1>
                <p className="text-md sm:text-lg font-bold">₱5,000</p>
              </div>
              
              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-[12px] sm:text-base">Due: 7/16/2025</h1>

                <div className="flex gap-1 sm:gap-2">
                  <div className="flex items-center justify-center border border-red-200 bg-red-50 text-red-500 px-1 sm:px-2 rounded-full gap-1">
                    <TriangleAlert className="h-3 w-3 sm:w-4 sm:h-4"/>
                    <p className="text-[10px] sm:text-[13px] font-medium">Overdue</p>
                  </div>
                  <p className="text-[10px] sm:text-[13px] flex items-center text-red-500">2 days overdue</p>
                </div>
              </div>   
              
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-gray-50">
            <div>
              <House className="h-10 w-10 p-2.5 border border-violet-200 rounded-md flex items-center text-violet-500 bg-violet-50"/>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">House Rent</h1>
                <p className="text-md sm:text-lg font-bold">₱3,000</p>
              </div>
              
              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-[12px] sm:text-base">Due: 7/2/2025</h1>

                <div className="flex gap-1 sm:gap-2">
                  <div className="flex items-center justify-center border border-yellow-200 bg-yellow-50 text-yellow-500 px-1 sm:px-2 rounded-full gap-1">
                    <Clock className="h-3 w-3 sm:w-4 sm:h-4"/>
                    <p className="text-[10px] sm:text-[13px] font-medium">Due Soon</p>
                  </div>
                  <p className="text-[10px] sm:text-[13px] flex items-center text-yellow-500">13 days left</p>
                </div>
              </div>   
              
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg mt-3 bg-gray-50">
            <div>
              <Tv className="h-10 w-10 p-2.5 border border-violet-200 rounded-md flex items-center text-violet-500 bg-violet-50"/>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-md sm:text-lg">Netflix</h1>
                <p className="text-md sm:text-lg font-bold">₱300</p>
              </div>
              
              <div className="flex justify-between items-center">
                <h1 className="text-gray-500 text-[12px] sm:text-base">Due: 6/24/2025</h1>

                <div className="flex gap-1 sm:gap-2">
                  <div className="flex items-center justify-center border border-green-200 bg-green-50 text-green-500 px-1 sm:px-2 rounded-full gap-1">
                    <CheckCircle className="h-3 w-3 sm:w-4 sm:h-4"/>
                    <p className="text-[10px] sm:text-[13px] font-medium">Paid</p>
                  </div>
                  <p className="text-[10px] sm:text-[13px] flex items-center text-green-500">Paid this month</p>
                </div>
              </div>   
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};