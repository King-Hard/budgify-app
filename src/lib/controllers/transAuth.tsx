"use server";

import { getCollection } from "../configs/database";
import { ExpenseSchema, IncomeSchema } from "../models/transSchema";
import getSession from "../configs/getSession";

export async function expense(state, formData) {
  const session = await getSession(); 
  if (!session) {
    return { errors: { general: "Not authenticated" } };
  };

  const validatedFields = ExpenseSchema.safeParse({
    amount: formData.get("amount"),
    category: formData.get("category"),
    description: formData.get("description"),
  });

  if(!validatedFields.success) return {
    errors: validatedFields.error.flatten().fieldErrors,
    amount: formData.get("amount"),
    description: formData.get("description"),
  };

  try {
    const postCollection = await getCollection("transactions");
    const expense = {
      userId: session.userId, // track user
      email: session.email,  
      name: "Expense",
      amount: validatedFields.data.amount,
      category: validatedFields.data.category,
      description: validatedFields.data.description,
      createdAt: new Date(),
    };
    await postCollection?.insertOne(expense);
    return {success: true};
  } 
  catch (error) {
    return {
      errors: {general: error.message}
    };
  };
};

export async function income (state, formData) {
  const session = await getSession(); 
  if (!session) {
    return { errors: { general: "Not authenticated" } };
  };

  const validatedFields = IncomeSchema.safeParse({
    amount: formData.get("amount"),
    category: formData.get("category"),
    description: formData.get("description"),
  });

  if(!validatedFields.success) return {
    errors: validatedFields.error.flatten().fieldErrors,
    amount: formData.get("amount"),
    description: formData.get("description"),
  };

  try {
    const postCollection = await getCollection("transactions");
    const income = {
      userId: session.userId, // track user
      email: session.email,  
      name: "Income",
      amount: validatedFields.data.amount,
      category: validatedFields.data.category,
      description: validatedFields.data.description,
      createdAt: new Date(),
    };
    await postCollection?.insertOne(income);
    return { success: true };
  } 
  catch (error) {
    return {
      errors: {general: error.message}
    };
  };
};

