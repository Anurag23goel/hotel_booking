import USER from "@/utils/models/user.model";
import OTP from "@/utils/models/otp.model";
import TOKEN from "@/utils/models/token.model";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import jwt from "jsonwebtoken";
import dbConnection from "@/utils/database/dbConnection";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  console.log(email);
  
  try {
    // Connect to database
    await dbConnection();

    // Find user by email or username (Only fetch required fields)
    const existingUser = await USER.findOne({ email });

    if (!existingUser) {
      return ApiError("User not found", 404);
    }

    // Create JWT token and store in database
    const tokenPayload = {
      id: existingUser._id,
      email: existingUser.email,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    const tokenDoc = await TOKEN.create({
      user_id: existingUser._id,
      token,
      purpose: "RESET_PASSWORD",
      expiresAt: new Date(Date.now() + 60*1000*10), // minutes*milliseconds*${your_time}
    });

    // Create OTP and store in database
    const otp = Math.floor(100000 + Math.random() * 60*1000*10);
    const otpDoc = await OTP.create({
      user_id: existingUser._id,
      otp,
      expiresAt: new Date(Date.now() + 60*1000*10), // minutes*milliseconds*${your_time}
      purpose: "FORGOT_PASSWORD",
    });

    // Send email with OTP
    // await sendForgotPasswordEmail(existingUser.email, otp);

    return ApiSuccess("OTP sent successfully", {}, 200, {
      name: "reset-password-token",
      value: token,
    });
    
  } catch (error: any) {
    console.log("Error while sending OTP - ", error.message);
    return ApiError("Error while sending OTP", 500);
  }
}
