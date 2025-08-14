"use client";
import { useRef, useEffect } from "react";

export default function BillMonth() {
  const monthRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    const currentMonth = now.toISOString().slice(0, 7);
    if (monthRef.current) {
      monthRef.current.value = currentMonth;
    }
  }, []);

  return (
    <div>
      <input 
        type="month" 
        ref={monthRef} 
        className="px-2 py-1 rounded-md text-sm sm:text-base bg-slate-50 cursor-pointer transition-shadow duration-300 hover:shadow-[0_2px_2px_0_rgba(0,0,0,0.2),0_-2px_2px_0_rgba(0,0,0,0.2),2px_0_2px_0_rgba(0,0,0,0.2),-2px_0_2px_0_rgba(0,0,0,0.2)]"
      />
    </div>
  );
};