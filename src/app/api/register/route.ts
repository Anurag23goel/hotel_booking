import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { User } from "../../../models/User"

export async function POST(req: NextRequest) {
  const body = (await req.json()) as User;
  const { name, email, password, agreed } = body;

  // Validate input
  if (!name || !email || !password || !agreed) {
    return NextResponse.json(
      { message: "All fields are required, including agreement to Privacy Policy" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("booking_db"); 
  const usersCollection = db.collection<User>("users");

  // Check if email already exists
  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: "Email already registered" }, { status: 400 });
  }

  // Create new user
  const newUser: User = {
    name,
    email,
    password,
    agreed,
    createdAt: new Date(),
  };

  await usersCollection.insertOne(newUser);
  return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
}