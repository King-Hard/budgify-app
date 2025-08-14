import { Bell, CheckCircle, Clock, TriangleAlert } from "lucide-react";

export default async function BillStats() {
  return (
    <div>
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
    </div>
  );
};