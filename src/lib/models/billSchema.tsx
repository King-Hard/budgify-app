import z from "zod";

export const BillSchema = z
  .object({
    bill: z 
      .string()
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



