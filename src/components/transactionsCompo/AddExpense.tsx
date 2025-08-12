"use client";

import { expense } from "@/lib/controllers/transAuth";
import {
  ChevronDown,
  ChevronUp,
  Cross,
  Gamepad2,
  GraduationCap,
  MinusCircle,
  ReceiptText,
  ShoppingCart,
  User,
  Utensils,
} from "lucide-react";

import { useActionState, useState, useEffect } from "react";

export default function AddExpense() {
  const [state, action] = useActionState(expense, undefined);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state && !state.errors && !state.amount && !state.description) {
      setSelectedCategory(null);
      setOpen(false);
    }
  }, [state]);

  const categories = [
    { value: "food", label: "Daily Meals", icon: <Utensils size={16} /> },
    { value: "utility", label: "Bills & Utilities", icon: <ReceiptText size={16} /> },
    { value: "healthcare", label: "Healthcare", icon: <Cross size={16} /> },
    { value: "education", label: "Education", icon: <GraduationCap size={16} /> },
    { value: "personal", label: "Personal Needs", icon: <User size={16} /> },
    { value: "entertainment", label: "Entertainment", icon: <Gamepad2 size={16} /> },
    { value: "grocery", label: "Groceries", icon: <ShoppingCart size={16} /> },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  return (
    <form action={action}>
      <div className="mb-4">
        <label className="font-medium">
          Amount (₱)
        </label>
        <input
        defaultValue={state?.amount}
          required
          name="amount"
          type="number"
          className="w-full border rounded-md p-2.5 px-3"
          placeholder="0.00"
        />

        {state?.errors?.amount && (
          <p className="text-sm text-red-600 mt-1">{state.errors.amount}</p>
        )}
      </div>

      <div className="relative mb-4">
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
                className="px-3 py-2 text-black hover:text-red-600 hover:bg-red-50 rounded-md cursor-pointer flex gap-2 items-center transition-colors duration-300"
                onClick={() => handleCategorySelect(category)}
              >
                {category.icon}
                {category.label}
              </li>
            ))}
          </ul>
        )}

        {selectedCategory && (
          <input
            type="hidden"
            name="category"
            value={selectedCategory.value}
          />
        )}

        {state?.errors?.category && (
          <p className="text-sm text-red-600 mt-1">{state.errors.category}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="font-medium">
          Description
        </label>
        <textarea
          defaultValue={state?.description}
          required
          placeholder="What did you spend on?"
          name="description"
          rows={3}
          className="w-full border rounded-md p-3"
        />

        {state?.errors?.description && (
          <p className="text-sm text-red-600 ">{state.errors.description}</p>
        )}
      </div>

      <div className="mt-8 text-white">
        <button 
          className="disabled:opacity-50 rounded-md p-3 w-full flex items-center justify-center gap-2 bg-red-600 cursor-pointer transition-all duration-300" 
          type="submit"
          disabled={!selectedCategory}
        >
          <MinusCircle className="w-5 h-5"/>
          Add Expense
        </button>
      </div>
    </form>
  );
};