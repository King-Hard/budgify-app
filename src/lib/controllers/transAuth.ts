"use server";

import { getCollection } from "../configs/database";
import { ExpenseSchema, IncomeSchema } from "../models/transSchema";
import getSession from "../configs/getSession";
import { revalidatePath } from "next/cache";

export async function expense(formData) {
  const session = await getSession();
  if (!session) {
    return { errors: { general: "Not authenticated" } };
  }

  const validatedFields = ExpenseSchema.safeParse({
    amount: formData.get("amount"),
    category: formData.get("category"),
    description: formData.get("description"),
  });

  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      amount: formData.get("amount"),
      description: formData.get("description"),
    };

  try {
    const postCollection = await getCollection("transactions");
    const expense = {
      userId: session.userId,
      email: session.email,
      name: "Expense",
      amount: validatedFields.data.amount,
      category: validatedFields.data.category,
      description: validatedFields.data.description,
      createdAt: new Date(),
    };
    await postCollection?.insertOne(expense);
    revalidatePath("/budgify"); // Revalidate the layout to refresh QuickStats
    return { success: true };
  } catch (error) {
    return {
      errors: { general: error.message },
    };
  }
}

export async function income(formData) {
  const session = await getSession();
  if (!session) {
    return { errors: { general: "Not authenticated" } };
  }

  const validatedFields = IncomeSchema.safeParse({
    amount: formData.get("amount"),
    category: formData.get("category"),
    description: formData.get("description"),
  });

  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      amount: formData.get("amount"),
      description: formData.get("description"),
    };

  try {
    const postCollection = await getCollection("transactions");
    const income = {
      userId: session.userId,
      email: session.email,
      name: "Income",
      amount: validatedFields.data.amount,
      category: validatedFields.data.category,
      description: validatedFields.data.description,
      createdAt: new Date(),
    };
    await postCollection?.insertOne(income);
    revalidatePath("/budgify"); // Revalidate the layout to refresh QuickStats
    return { success: true };
  } catch (error) {
    return {
      errors: { general: error.message },
    };
  }
}