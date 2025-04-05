import { ApiError } from "@/services/apiResponse";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, JWTPayload } from "jose";

export default async function middlewareForBackendApi(req: NextRequest) {
  try {
    // Extract the token from cookies
    const token = req.cookies.get("authToken")?.value;
    if (!token) {
      return ApiError("Unauthorized: No token provided", 401);
    }

    // Verify the JWT token
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET as string) // Encoding secret key
    );

    // Attach user data from the token to the request
    (req as any).user = payload; // Storing user data in the request object

    // If verification is successful, return true (meaning request is authorized)
    return true;
  } catch (error) {
    console.error("Error in middleware:", error);
    return ApiError("Unauthorized: Invalid token", 401);
  }
}
