import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/utils/models/user.model";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import dbConnect from "@/utils/dabatabase/dbConnection";
import dbConnection from "@/utils/dabatabase/dbConnection";

export async function POST(req: NextRequest) {
  try {
    await dbConnection(); 
    
    const { name, email, password, phoneNumber, profilePicture, provider } = await req.json();

   
    if (!name || !email || !password) {
      return ApiError("Name, email, and password are required", 400);
    }

   
    const existingUser = await User.findOne({ email });  
    if (existingUser) {
      return ApiError("User already exists with this email", 400);
    }

   
    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password,
      phoneNumber,
    //   profilePicture,
      provider: provider || "local",
    });
    await newUser.save();
    if(profilePicture){
        newUser.profilePicture = profilePicture;
        await newUser.save();
    }
    

    return ApiSuccess("User registered successfully", { userId: newUser._id }, 201);
  } catch (error) {
    return ApiError(error);
  }
}
