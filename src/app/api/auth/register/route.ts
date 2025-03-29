import { NextRequest } from "next/server";
import USER from "@/utils/models/user.model";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import dbConnection from "@/utils/database/dbConnection";


export async function POST(req: NextRequest) {
  try {
    const { name, email, password, phoneNumber, profilePicture, provider } =
    await req.json();
    
    console.log(email, name);
    await dbConnection();

    if (!name || !email || !password) {
      return ApiError("Name, email, and password are required", 400);
    }

    const existingUser = await USER.findOne({ email });
    if (existingUser) {
      return ApiError("User already exists with this email", 400);
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await USER.create({
      name,
      email,
      password,
      phoneNumber,
      provider: provider || "local",
    });

    if (profilePicture) {
      newUser.profilePicture = profilePicture;
      await newUser.save();
    }

    return ApiSuccess(
      "User registered successfully",
      { userId: newUser._id },
      201
    );
  } catch (error) {
    return ApiError(error);
  }
}
