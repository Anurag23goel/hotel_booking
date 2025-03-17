import { MongoClient } from "mongodb";

// Ensure MONGODB_URI is defined
if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const uri = process.env.MONGODB_URI;

// Extend global type for TypeScript
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Singleton connection logic
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

// Export the promise
export default clientPromise;

// Optional: Function to close the connection (useful for cleanup)
export async function closeConnection() {
  if (client) {
    await client.close();
    global._mongoClientPromise = undefined; // Reset the global promise
  }
}