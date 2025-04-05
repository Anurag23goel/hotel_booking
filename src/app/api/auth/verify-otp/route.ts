import OTP from "@/utils/models/otp.model";
import TOKEN from "@/utils/models/token.model";
import USER from "@/utils/models/user.model";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import dbConnection from "@/utils/database/dbConnection";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { otp } = await req.json();
    const resetPasswordToken = req.cookies.get("reset-password-token")?.value;

    
    if (!resetPasswordToken) {
      return ApiError("Reset password token not found", 400);
    }

    const doesTokenExists = await TOKEN.findOne({ token: resetPasswordToken });
    if (!doesTokenExists) {
      return ApiError("Invalid reset password token", 400);
    }

    const exisitingUser = await USER.findById(doesTokenExists.user_id)
    if(!exisitingUser){
      return ApiError("User not found", 404);
    }

    await dbConnection();
    const existingOtp = await OTP.findOne({ otp });

    if (!existingOtp) {
      return ApiError("Invalid OTP", 400);
    }
    if (existingOtp.isVerified) {
      return ApiError("OTP already verified", 400);
    }

    existingOtp.isVerified = true;
    await existingOtp.save();

    return ApiSuccess("OTP verified successfully", {}, 200, {
      name: "reset-Password-Token",
      value: resetPasswordToken,
    });
  } catch (error: any) {
    console.log("Error while verifying OTP - ", error.message);
    return ApiError(error.message, 500);
  }
}
