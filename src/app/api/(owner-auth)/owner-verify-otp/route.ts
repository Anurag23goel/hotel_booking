import { NextRequest, NextResponse } from "next/server";
import OTP from "@/utils/models/otp.model";
import dbConnection from "@/utils/database/dbConnection";
import { ApiError, ApiSuccess } from "@/services/apiResponse";

export async function POST(request: NextRequest) {
  try {
    const { otp } = await request.json();
    await dbConnection();

    const existingOtp = await OTP.findOne({ otp });

    if (!existingOtp) {
      return ApiError("Invalid OTP", 400);
    }
    if(existingOtp.isVerified){
      return ApiError("OTP already verified", 400);
    }

    existingOtp.isVerified = true;
    await existingOtp.save();

    return ApiSuccess("OTP verified successfully", {}, 200);

    } catch (error: any) {
      console.log("Error while verifying OTP - ", error.message);
    }
}
