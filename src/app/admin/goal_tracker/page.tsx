"use client";

import AddFunds from "@/components/GoalCompo/AddFunds";
import AddGoal from "@/components/GoalCompo/AddGoal";
import { useState } from "react";
import {
  Calendar,
  DollarSign,
  Goal,
  Laptop,
  Plane,
  Plus,
  Target,
  Trophy,
} from "lucide-react";

export default function GoalTracker() {
  const [goal, setGoal] = useState(false);

  const handleCloseForm = () => {
    setGoal(false);
  };

  return (
    <div className="p-5 border-l border-gray-200">
      <div className="mb-6 flex justify-between items-center">
        <div className="max-w-sm">
          <h1 className="text-3xl font-bold text-orange-500">Goal Tracker</h1>
          <p className="text-gray-500 mt-1 ">Track your saving goals</p>
        </div>

        <div>
          <button
            onClick={() => setGoal((prev) => !prev)}
            className="flex justify-center items-center gap-2 py-2 px-3 text-white font-medium rounded-md cursor-pointer bg-orange-500 hover:bg-orange-600"
          >
            <Plus className="w-5 h-5 text-white" />
            New Goal
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-medium">Total Saved</h1>
            <DollarSign className="text-green-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl text-green-600 font-bold">₱170,000</h1>
            <p className="text-sm text-gray-500">of ₱440,000</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-medium">Completed Goals</h1>
            <Goal className="text-violet-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl text-violet-600 font-bold">3</h1>
            <p className="text-sm text-gray-500">Goals reached</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-medium">Overall Progress</h1>
            <Trophy className="text-yellow-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl text-yellow-600 font-bold">38.6%</h1>
            <p className="text-sm text-gray-500">Completion rate</p>
          </div>
        </div>

        <div className="px-5 py-6 space-y-2 w-full rounded-lg bg-white shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-medium">Total Goals</h1>
            <Target className="text-orange-600 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl text-orange-600 font-bold">5</h1>
            <p className="text-sm text-gray-500">Active goals</p>
          </div>
        </div>
      </div>

      <div>{goal ? <AddGoal onCancel={handleCloseForm} /> : <></>}</div>

      <div className="mt-6 grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-5 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <Laptop className="h-13 w-13 p-3 rounded-md bg-orange-50 text-orange-600 border border-orange-200" />
            <div>
              <h1 className="text-xl font-medium">New Laptop</h1>
              <p className="text-base sm:lg text-gray-500">Technology</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between">
              <h1 className="text-gray-500 ">Progress</h1>
              <p className=" font-medium">50.0%</p>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-2 mb-2">
              <div className="bg-orange-500 h-3 rounded-full w-1/2"></div>
            </div>
            <div className="flex justify-between">
              <h1 className="text-orange-600 font-medium">₱25,000</h1>
              <p className="text-gray-500">₱50,000</p>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <div className="w-full p-5 bg-gray-100 rounded-md flex flex-col justify-center items-center">
              <Calendar className="w-5 h-5 mb-1 text-gray-500" />
              <h1 className="text-sm text-gray-500">Dasy left</h1>
              <p className="text-yellow-600 font-medium">Overdue</p>
            </div>

            <div className="w-full p-5 bg-gray-100 rounded-md flex flex-col justify-center items-center">
              <DollarSign className="w-5 h-5 mb-1 text-gray-500" />
              <h1 className="text-sm text-gray-500">Remaining</h1>
              <p className="font-medium">₱25,000</p>
            </div>
          </div>

          <div className="mt-4">
            <AddFunds />
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <Plane className="h-13 w-13 p-3 rounded-md bg-orange-50 text-orange-600 border border-orange-200" />
            <div>
              <h1 className="text-xl font-medium">Vacation to Japan</h1>
              <p className="text-base sm:lg text-gray-500">Travel</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between">
              <h1 className="text-gray-500 ">Progress</h1>
              <p className=" font-medium">50.0%</p>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-2 mb-2">
              <div className="bg-orange-500 h-3 rounded-full w-1/2"></div>
            </div>
            <div className="flex justify-between">
              <h1 className="text-orange-600 font-medium">₱35,000</h1>
              <p className="text-gray-500">₱70,000</p>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <div className="w-full p-5 bg-gray-100 rounded-md flex flex-col justify-center items-center">
              <Calendar className="w-5 h-5 mb-1 text-gray-500" />
              <h1 className="text-sm text-gray-500">Dasy left</h1>
              <p className="font-medium text-green-600">124</p>
            </div>

            <div className="w-full p-5 bg-gray-100 rounded-md flex flex-col justify-center items-center">
              <DollarSign className="w-5 h-5 mb-1 text-gray-500" />
              <h1 className="text-sm text-gray-500">Remaining</h1>
              <p className="font-medium">₱35,000</p>
            </div>
          </div>

          <div className="mt-4">
            <AddFunds />
          </div>
        </div>
      </div>
    </div>
  );
}
