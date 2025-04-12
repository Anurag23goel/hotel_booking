import { ApiError } from "@/services/apiResponse";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import USER from "@/utils/models/user.model";

export default async function middlewareForBackendApi(req: NextRequest) {
  try {
    // Extract the token from cookies
    const token = req.cookies.get("authToken")?.value;
    if (!token) {
      return ApiError("Unauthorized: No token provided", 401);
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    // Type guard: Ensure decoded is of type JwtPayload
    if (typeof decoded !== "object" || decoded === null || !("userID" in decoded)) {
      return ApiError("Unauthorized: Invalid token payload", 401);
    }

    const payload = decoded as JwtPayload;

    // Attach user data from the token to the request
    (req as any).user = payload;
    const user = await USER.findById(payload.userID as string);

    return true;
  } catch (error) {
    console.error("Error in middleware:", error);
    return ApiError("Unauthorized: Invalid token", 401);
  }
}
