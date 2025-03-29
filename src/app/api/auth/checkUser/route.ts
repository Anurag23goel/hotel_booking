import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import USER from "@/utils/models/user.model";

interface UserData {
  userID: string;
  email: string;
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken");

    if (!token) {
      return ApiError("Not logged in");
    }

    const decoded = jwt.verify(
      token.value,
      process.env.JWT_SECRET as string
    ) as UserData;

    const existingUser = await USER.findOne({ _id: decoded.userID });

    if(!existingUser){
      return ApiError("User not found");
    }

    console.log("EXISTING USER JO DB SE AAYA HAI", existingUser);
    

    const userData = {
      userID: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
      profilePicture: existingUser.profilePicture,
      isActive: existingUser.isActive,
      token: token.value
    };

    console.log("decoded is route me -> ", userData);

    return ApiSuccess("User data fetched successfully", userData, 200);
  } catch (error) {
    console.error("Error fetching user data ITNERNAL SERVER ERROR:", error);
    return ApiError("Failed to fetch user data");
  }
}
