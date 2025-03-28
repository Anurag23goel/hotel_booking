import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ApiSuccess, ApiError } from "@/services/apiResponse";

interface UserData {
  id: string;
  email: string;
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken");

    if (!token) {
      return ApiError("Not authenticated");
    }

    const decoded = jwt.verify(token.value, process.env.JWT_SECRET as string) as UserData;
    const dataOfUser = decoded.email;
    console.log("decoded is route me -> ", dataOfUser);

    return ApiSuccess("User data fetched successfully",dataOfUser,200);

  } catch (error) {
    console.error("Error fetching user data:", error);
    return ApiError("Failed to fetch user data");
  }
}
