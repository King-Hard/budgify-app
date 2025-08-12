import { getRelativeTime } from "@/lib/utils/TimeFormatter";
import { Handshake } from "lucide-react";

export default function BusinessCard({description, amount, date, category, createdAt}) {
  return (
    <div className="flex items-center p-4 gap-2 rounded-lg mt-3 bg-gray-50">
      <div>
        <Handshake className="h-10 w-10 p-2.5 border border-green-300 rounded-md flex items-center text-green-500 bg-green-50"/>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-md sm:text-lg">
            {description}
          </h1>
          <p className="text-md sm:text-lg font-medium text-green-600">
            +₱{amount.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-gray-500 text-sm font-medium">
            {getRelativeTime(createdAt || date)}
          </h1>
          <p className="border border-green-300 px-2 rounded-full text-[10px] sm:text-[13px] text-green-600 bg-green-50 font-medium flex items-center">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};