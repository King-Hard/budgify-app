import { 
  Banknote, 
  Bell, 
  CheckCircle, 
  Clock, 
  House, 
  TriangleAlert, 
  Tv, 
  Wifi, 
  Zap 
} from "lucide-react";
import BillMonth from "./BillMonth";

export default async function BillHistory() {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm w-full mt-6">
        <div>
          <div className="flex justify-between items-center"> 
            <div className="flex items-center gap-2">
              <Bell className="text-violet-600"/>
              <h1 className="text-xl sm:text-2xl font-medium">Your Bills</h1>
            </div>    
            <BillMonth/>
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
  );
};