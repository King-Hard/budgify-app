import z from "zod";

export const BudgetSchema = z
  .object({
    amount: z 
      .string()
      .trim()
      .transform((val) => Number(val))
      .refine((val) => val > 0, "Amount must be greater than 0"),
});