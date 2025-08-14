"use server";

import { getCollection } from "../configs/database";
import getSession from "../configs/getSession";
import { goalSchema } from "../models/goalSchema";

export async function goal(formData) {
  const session = await getSession();
  if (!session) {
    return { errors: { general: "Not authenticated" } };
  }

  const validatedFields = goalSchema.safeParse({
    goal: formData.get("goal"),
    amount: formData.get("amount"),
    category: formData.get("category"),
    date: formData.get("date"),
  });

  if (!validatedFields.success) return {
    errors: validatedFields.error.flatten().fieldErrors,
    goal: formData.get("goal"),
    amount: formData.get("amount"),
    date: formData.get("date"),
  };

  try {
    const postCollection = await getCollection("goals");
    const goal = {
      userId: session.userId,
      email: session.email,
      goal: validatedFields.data.goal,
      amount: validatedFields.data.amount,
      category: validatedFields.data.category,
      date: validatedFields.data.date,
      createdAt: new Date(),
    };
    await postCollection?.insertOne(goal);
    return { success: true };
  } catch (error) {
    return {
      errors: { general: error.message },
    };
  };
};
