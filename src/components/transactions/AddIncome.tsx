"use client";

import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Handshake,
  Laptop,
  PlusCircle,
  SquaresExclude,
} from "lucide-react";

import { useState } from "react";

export default function AddIncome() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);

  const categories = [
    { value: "salary", label: "Salary", icon: <Briefcase size={16} /> },
    { value: "freelance", label: "Freelance", icon: <Laptop size={16} /> },
    { value: "business", label: "Business", icon: <Handshake size={16} /> },
    { value: "investment", label: "Investment", icon: <SquaresExclude size={16} /> },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="amount" className="font-medium">
          Amount (₱)
        </label>
        <input
          required
          id="amount"
          name="amount"
          type="number"
          className="w-full border rounded-md p-2.5 px-3"
          placeholder="0.00"
        />
      </div>

      <div className="relative mb-4">
        <label className="font-medium">Source</label>
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
              <span className="text-black">Select income source</span>
            )}
          </div>
          <span className="text-black">{open ? <ChevronUp/> : <ChevronDown />}</span>
        </button>

        {open && (
          <ul className="absolute z-10 mt-1 bg-white w-full border rounded-md shadow-md max-h-60 overflow-auto">
            {categories.map((category) => (
              <li
                key={category.value}
                className="px-3 py-2 text-black hover:text-green-600 hover:bg-green-50 rounded-md cursor-pointer flex gap-2 items-center "
                onClick={() => handleCategorySelect(category)}
              >
                {category.icon}
                {category.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="font-medium">
          Description
        </label>
        <textarea
          required
          placeholder="Describe your income source"
          id="description"
          name="description"
          rows={3}
          className="w-full border rounded-md p-3"
        />
      </div>

      <div className="mt-8 text-white">
        <button 
          className="rounded-md p-3 w-full flex items-center justify-center gap-2 bg-green-700 cursor-pointer"
          type="submit"
        >
          <PlusCircle className="w-5 h-5"/>
          Add Income
        </button>
      </div>
    </form>
  );
};