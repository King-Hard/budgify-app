"use client";

import { bill } from "@/lib/controllers/billAuth";
import {
  Banknote,
  ChevronDown,
  ChevronUp,
  Droplet,
  House,
  Plus,
  PlusCircle,
  School,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";

import { useActionState, useState, useEffect } from "react";

export default function AddBill({onCancel}) {
  const [state, action] = useActionState(bill, undefined);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state && !state.errors && !state.amount && !state.description) {
      setSelectedCategory(null);
      setOpen(false);
    }
  }, [state]);

  const categories = [
    { value: "electricity", label: "Electricity ", icon: <Zap size={16} /> },
    { value: "water", label: "Water ", icon: <Droplet size={16} /> },
    { value: "internet", label: "Internet", icon: <Wifi size={16} /> },
    { value: "rent", label: "Rent", icon: <House size={16} /> },
    { value: "loan", label: "Loan Payment", icon: <Banknote size={16} /> },
    { value: "tuition", label: "Tuition Fee", icon: <School size={16} /> },
    { value: "subscription", label: "Subsciption", icon: <Tv size={16} /> },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form 
      action={action}
      className="mt-6 bg-white shadow-md rounded-lg p-5"
    >
      <div className="">
        <div className="flex items-center gap-2">
          <PlusCircle className="text-violet-600" />
          <h1 className="text-2xl font-medium">Add New Bill</h1>
        </div>
        <p className="text-gray-500">Set up a reminder for your upcoming bill</p>
      </div>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 mb-2 mt-6">
        <div className="flex-col">
          <label className="font-medium">
            Bill Name
          </label>
          <input
            defaultValue={state?.bill}
            required
            type="text"
            name="bill"
            placeholder="example: Electric Bill"
            className="border px-3 py-2 w-full rounded-md"
          />

          {state?.errors?.bill && (
            <p className="text-sm  text-red-600">{state.errors.bill}</p>
          )}
        </div>
      
        <div className="flex-col">
          <label className="font-medium">
            Amount (₱)
          </label>
          <input
            defaultValue={state?.amount}
            required
            type="number"
            name="amount"
            placeholder="0.00"
            className="border px-3 py-2 w-full rounded-md"
          />

          {state?.errors?.amount && (
            <p className="text-sm  text-red-600">{state.errors.amount}</p>
          )}
        </div>

        <div>
          <h1>agffafa</h1>
          <h1>adsadsadsadsa</h1>
          <div>
            <h1></h1>
          </div>
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
            <span className="text-black">
              {open ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>

          {open && (
            <ul className="absolute z-10 mt-1 bg-white w-full border rounded-md shadow-md max-h-60 overflow-auto">
              {categories.map((category) => (
                <li
                  key={category.value}
                  className="px-3 py-2 text-black hover:text-violet-600 hover:bg-violet-50 rounded-md cursor-pointer flex gap-2 items-center transition-colors duration-200"
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
            <p className="text-sm text-red-600">{state.errors.category}</p>
          )}
        </div>

        <div className="flex-col">
          <label className="font-medium">
            Due Date
          </label>
          <input
            defaultValue={state?.date}
            required
            type="date"
            name="date"
            className="border px-3 py-2 w-full rounded-md"
          />

          {state?.errors?.date && (
            <p className="text-sm  text-red-600">{state.errors.date}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-6 ">
        <button
          type="button"
          onClick={handleCancel}
          className="cursor-pointer px-3 py-2 w-31 bg-violet-100 rounded-md hover:bg-violet-200 transition-colors duration-300"
        >
          Cancel
        </button>

        <button 
          className="disabled:opacity-50 cursor-pointer px-3 py-2 w-31 flex justify-center items-center gap-2 bg-violet-600 text-white rounded-md transition-all duration-300"
          type="submit"
          disabled={!selectedCategory}
        >
          <Plus className="h-5 w-5"/>
          Add Bil
        </button>
      </div>
    </form>
  );
};
