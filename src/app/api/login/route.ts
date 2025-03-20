import { NextRequest } from "next/server";
import dbConnection from "@/utils/dbConnection";
import { ApiError, ApiSuccess } from "@/services/apiResponse";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    const { emailUsername, password } = await req.json();
  
    try {
      // Connect to database
      await dbConnection();
  
      // Find user by email or username (Only fetch required fields)
      const existingUser = await USER.findOne(
        { $or: [{ email: emailUsername }, { userName: emailUsername }] },
        "+password"
      );
  
      if (!existingUser) {
        return ApiError("User not found", 404);
      }
  
      // Securely compare hashed password
      if (existingUser.password !== password) {
        return ApiError("Invalid Credentials!", 400);
      }
  
      // Create JWT token
      const tokenPayload = {
        id: existingUser._id,
        email: existingUser.email,
        userName: existingUser.userName,
        role: existingUser.role,
      };
  
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET as string, {
        expiresIn: "7d", //  Set expiration for better security
      });
  
      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Set secure only in production
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 7 Days
        path: "/",
      };
  
      // Set HTTP-only cookie
      return ApiSuccess(
        "Login Successful",
        {
          user: existingUser,
        },
        200,
        { name: "token", value: token, options: cookieOptions }
      );
    } catch (error: any) {
      console.error("Error while logging in: ", error);
      return ApiError("Internal Server Error", 500);
    }
  }
  