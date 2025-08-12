import { getRelativeTime } from "@/lib/utils/TimeFormatter";
import { Utensils } from "lucide-react";

export default function DailyMealsCard({description, amount, date, category, createdAt}) {
  return (
    <div className="flex items-center p-4 gap-2 rounded-lg mt-3 bg-gray-50">
      <div>
        <Utensils className="h-10 w-10 p-2.5 border border-red-300 rounded-md flex items-center text-red-500 bg-red-50"/>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-md sm:text-lg">
            {description}
          </h1>
          <p className="text-md sm:text-lg font-medium text-red-600">
            -₱{amount.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-gray-500 text-sm font-medium">
            {getRelativeTime(createdAt || date)}
          </h1>
          <p className="border border-red-300 px-2 rounded-full text-[10px] sm:text-[13px] text-red-600 bg-red-50 font-medium flex items-center">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};