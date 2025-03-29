import { NextRequest } from "next/server";
import USER from "@/utils/models/user.model";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import jwt from "jsonwebtoken";
import dbConnection from "@/utils/database/dbConnection";
import { profile } from "console";

export async function POST(req: NextRequest) {
  try {
    await dbConnection();

    const { email, password } = await req.json();

    if (!email || !password) {
      return ApiError("Email and password are required", 400);
    }

    const existingUser = await USER.findOne({ email });

    if (!existingUser) {
      return ApiError("Invalid email or password", 401);
    }

    const token = jwt.sign(
      { userID: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    const cookieOptions = {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60, // 7 days expiration (in seconds)
      path: "/", // Cookie accessible across the whole site
    };

    const userDataToSend = {
      userID: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
      profilePicture: existingUser.profilePicture,
      isActive: existingUser.isActive,
    };

    // Send JWT token as a secure cookie
    return ApiSuccess("Login successful", { user: userDataToSend }, 200, {
      name: "authToken",
      value: token,
      options: cookieOptions,
    });
  } catch (error) {
    return ApiError(error);
  }
}
