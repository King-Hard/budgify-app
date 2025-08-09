import z from "zod";

export const goalSchema = z
  .object({
    goal: z
      .string()
      .max(20, {message: "Max of 20 characters only."})
      .trim(),
    
    amount: z
      .string()
      .trim()
      .transform((val) => Number(val))
      .refine((val) => val > 0, "Amount must be greater than 0"),

    category: z
      .string()
      .trim(),

    date: z
      .string()
      .trim()
      .refine((val) => !isNaN(Date.parse(val)), "Invalid date format"),
});