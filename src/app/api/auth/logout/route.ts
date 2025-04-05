import { ApiError } from "@/services/apiResponse";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import USER from "@/utils/models/user.model";
import { TYPE_OF_DECODED_USER_DATA } from "@/Types";
import dbConnection from "@/utils/database/dbConnection";

export async function GET(req: NextRequest) {
  try {
    dbConnection();
    const authToken = req.cookies.get("authToken")?.value;
    if (!authToken) {
      return ApiError("User token missing. Cant logout without token");
    }

    const decoded = jwt.verify(
      authToken,
      process.env.JWT_SECRET as string
    ) as TYPE_OF_DECODED_USER_DATA;

    const existingUser = await USER.findById(decoded.userID);

    if (!existingUser) {
      return ApiError("User not found");
    }

    const response = NextResponse.json(
      {
        success: true,
        message: "Logout successful",
      },
      { status: 200 }
    );

    response.cookies.delete("authToken");

    return response;
  } catch (error: any) {
    console.log("Error while logging out - ", error.message);
    return ApiError(error.message);
  }
}
