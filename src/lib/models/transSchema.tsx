import z from "zod";

export const ExpenseSchema = z
  .object({
    amount: z 
      .string()
      .trim()
      .transform((val) => Number(val))
      .refine((val) => val > 0, "Amount must be greater than 0"),

    category: z 
      .string()
      .trim(),

    description: z
      .string()
      .max(20, {message: "Max of 20 characters only."})
      .trim(),
});

export const IncomeSchema = z
  .object({
    amount: z 
      .string()
      .trim()
      .transform((val) => Number(val))
      .refine((val) => val > 0, "Amount must be greater than 0"),

    category: z 
      .string()
      .trim(),

    description: z
      .string()
      .max(20, {message: "Max of 20 characters only."})
      .trim(),
});


