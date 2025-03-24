import { NextRequest } from "next/server";
import USER from "@/utils/models/user.model";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import dbConnection from "@/utils/database/dbConnection";
import OTP from "@/utils/models/otp.model";

export async function POST(req: NextRequest) {
  try {
    await dbConnection();

    const { email} = await req.json();

    if (!email ) {
      return ApiError("Email is required", 400);
    }

    const existingUser = await USER.findOne({ email });
    if (!existingUser) {
      return ApiError("Invalid email or password", 401);
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpDoc = await OTP.create({
      user_id: existingUser._id,
      otp,
      expiresAt: new Date(Date.now() + 60*1000*10),
      
    });
    
    return ApiSuccess("Login successful", { otp }, 200);
    
  } catch (error) {
    return ApiError(error);
  }
}
