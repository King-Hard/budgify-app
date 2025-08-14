"use server";

import { BudgetSchema } from "../models/budgetSchema";
import getSession from "../configs/getSession";
import { getCollection } from "../configs/database";
import { revalidatePath } from "next/cache";

export async function budget(formData) {
  const session = await getSession(); 
  if (!session) {
    return { errors: { general: "Not authenticated" } };
  }

  const validatedFields = BudgetSchema.safeParse({
    amount: formData.get("amount"),
  });

  if(!validatedFields.success) return {
    errors: validatedFields.error.flatten().fieldErrors, 
    amount: formData.get("amount"),
  };

  try {
    const budgetCollection = await getCollection("budgets");
  
    await budgetCollection?.updateOne(
      { userId: session.userId }, // find by current user
      { 
        $set: { 
          monthlyBudget: validatedFields.data.amount,
          updatedAt: new Date()
        },
        $setOnInsert: { 
          createdAt: new Date() // only set kung bagong create
        }
      },
      { upsert: true } // create if not found, update if found
    );

    revalidatePath("/budgify/dashboard");
    return { success: true };

  } catch (error) {
    return {
      errors: { general: error.message }
    };
  };
};