"use server";

import { getCollection } from "../configs/database";
import getSession from "../configs/getSession";
import { BillSchema } from "../models/billSchema";

export async function bill(state, formData) {
  const session = await getSession(); 
  if (!session) {
    return { errors: { general: "Not authenticated" } };
  };

  const validatedFields = BillSchema.safeParse({
    bill: formData.get("bill"),
    amount: formData.get("amount"),
    category: formData.get("category"),
    date: formData.get("date"),
  });

  if(!validatedFields.success) return {
    errors: validatedFields.error.flatten().fieldErrors,
    bill: formData.get("bill"),
    amount: formData.get("amount"),
    date: formData.get("date"),
  };

  try {
    const postCollection = await getCollection("bills");
    const bill = {
      userId: session.userId,
      email: session.email,
      bill: validatedFields.data.bill,
      amount: validatedFields.data.amount,
      category: validatedFields.data.category,
      date: validatedFields.data.date,
      createdAt: new Date(),
    };
    await postCollection?.insertOne(bill);
    return {success: true};
  }
  catch (error) {
    return {
      errors: {general: error.message}
    };
  };
};