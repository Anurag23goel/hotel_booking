import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import USER from "@/utils/models/user.model";
import { TYPE_OF_DECODED_USER_DATA } from "@/types";
import dbConnection from "@/utils/database/dbConnection";

export async function GET() {
  try {
    dbConnection();

    const cookieStore = await cookies();
    const token = cookieStore.get("authToken");

    if (!token) {
      return ApiError("Not logged in");
    }

    const decoded = jwt.verify(
      token.value,
      process.env.JWT_SECRET as string
    ) as TYPE_OF_DECODED_USER_DATA;

    const existingUser = await USER.findOne({ _id: decoded.userID });

    if (!existingUser) {
      return ApiError("User not found");
    }

    const userData = {
      userID: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
      profilePicture: existingUser.profilePicture,
      isActive: existingUser.isActive,
      token: token.value,
    };

    return ApiSuccess("User data fetched successfully", userData, 200);
  } catch (error) {
    console.error("Error fetching user data ITNERNAL SERVER ERROR:", error);
    return ApiError("Failed to fetch user data");
  }
}
