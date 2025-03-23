import OTP from "@/utils/models/otp.model";
import TOKEN from "@/utils/models/token.model";
import USER from "@/utils/models/user.model";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import dbConnection from "@/utils/database/dbConnection";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  // confirm password wala bhi banana hoga jaldi
  const { newPassword} = await req.json();
  const resetPasswordToken = req.cookies.get("reset-password-token")?.value;

  console.log(resetPasswordToken);

  try {
    if (!resetPasswordToken) {
      return ApiError("Reset password token not found", 400);
    }

    const doesTokenExists = await TOKEN.findOne({ token: resetPasswordToken });
    if (!doesTokenExists) {
      return ApiError("Invalid reset password token", 400);
    }

    // Connect to database
    await dbConnection();

    // Find user by email or username (Only fetch required fields)
    const existingUser = await USER.findOne({
      _id: doesTokenExists.user_id,
    }).select("+password");


    if (!existingUser) {
      return ApiError("User not found", 404);
    }

    // Update user password
    existingUser.password = newPassword;
    await existingUser.save();

    return ApiSuccess("Password updated successfully");
  } catch (error) {
    console.log(error);
    return ApiError("Something went wrong", 500);
  }
}
