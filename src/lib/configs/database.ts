import "server-only";

import { MongoClient, ServerApiVersion } from "mongodb";

if(!process.env.DB_URI) {
  throw new Error("DB URI not found!");
};

const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getDB(dbName: string) 
  try {
    await client.connect();
    console.log("Database connected!");
    return client.db(dbName);
  } catch {
    console.log("Failed to connect!");
  }
};

export async function getCollection(collectionName: string) {
  const storage = await getDB("budgify_app");
  if(storage) return storage.collection(collectionName);

  return null;
};

