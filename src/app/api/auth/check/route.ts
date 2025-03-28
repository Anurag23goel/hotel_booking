import { NextRequest } from "next/server";
import { ApiSuccess, ApiError } from "@/services/apiResponse";
import jwt from "jsonwebtoken";


export async function GET(req: NextRequest) {
  // console.log("yaha check karna h ki user authenticated hai ya nahi");
  try {
    const authToken = req.cookies.get("authToken")?.value;
    console.log("authToken is -> ", authToken);
    if (!authToken) {
      return ApiError("Not authenticated");
    }

    try {
     
      const decoded = jwt.verify(authToken, process.env.JWT_SECRET as string);
      console.log("decoded is -> ", decoded);
      return ApiSuccess("Authenticated", { 
        decoded 
      });

    } catch (error) {
      console.log("error is -> ", error);
      return ApiError("Not authenticated");
    }
  } catch (error) {
    console.error("Auth check error:", error);
    return ApiError("Authentication check failed");
  }
}




