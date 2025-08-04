"use client";

import {
  Car,
  ChevronDown,
  ChevronUp,
  CreditCard,
  House,
  Plus,
  PlusCircle,
  Wifi,
  Zap,
} from "lucide-react";

import { useState } from "react";

export default function AddBill({onCancel}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);


  const categories = [
    { value: "utilities", label: "Utilities", icon: <Zap size={16} /> },
    { value: "internet", label: "Internet", icon: <Wifi size={16} /> },
    { value: "credit", label: "Credit Card", icon: <CreditCard size={16} /> },
    { value: "rent", label: "Rent", icon: <House size={16} /> },
    { value: "insurance", label: "Insurance", icon: <Car size={16} /> },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  const handleCancel = () => {
    onCancel(); // Call parent function to close form
  };

  return (
    <form 
      className="mt-6 bg-white shadow-md rounded-lg p-5 "
    >
      <div className="">
        <div className="flex items-center gap-2">
          <PlusCircle className="text-violet-600"/> 
          <h1 className="text-2xl font-medium">Add New Bill Reminder</h1>
        </div>
        <p className="text-gray-500">Set up a reminder for your upcoming bill</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 mb-2 mt-6">
        <div className="flex-col">
          <label htmlFor="bill_name" className="font-medium">
            Bill Name
          </label>
          <input
            type="text"
            name="bill_name"
            id="bill_name"
            placeholder="example: Electric Bill"
            className="border px-3 py-2 w-full rounded-md"
          />
        </div>

        <div className="flex-col">
          <label htmlFor="amount" className="font-medium">
            Amount (₱)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="0.00"
            className="border px-3 py-2 w-full rounded-md"
          />
        </div>

        <div className="relative">
          <label className="font-medium">Category</label>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-full border rounded-md p-2.5 px-3 text-left flex justify-between items-center cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              {selectedCategory ? (
                <>
                  {selectedCategory.icon}
                  {selectedCategory.label}
                </>
              ) : (
                <span className="text-black">Select a category</span>
              )}
            </div>
            <span className="text-black">{open ? <ChevronUp/> : <ChevronDown />}</span>
          </button>

          {open && (
            <ul className="absolute z-10 mt-1 bg-white w-full border rounded-md shadow-md max-h-60 overflow-auto">
              {categories.map((category) => (
                <li
                  key={category.value}
                  className="px-3 py-2 text-black hover:text-violet-600 hover:bg-violet-50 rounded-md cursor-pointer flex gap-2 items-center"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category.icon}
                  {category.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex-col">
          <label htmlFor="date" className="font-medium">
            Due Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="example: Electric Bill"
            className="border px-3 py-2 w-full rounded-md"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6 ">
        <button 
          className="cursor-pointer px-3 py-2 flex justify-center items-center gap-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
        >
          <Plus className="h-5 w-5"/>
          Add Reminder
        </button>

        <button 
          onClick={handleCancel}
          className="cursor-pointer px-3 py-2 bg-violet-100 rounded-md hover:bg-violet-200"
        >
          Cancel
        </button>
      </div>

    </form>
  );
};