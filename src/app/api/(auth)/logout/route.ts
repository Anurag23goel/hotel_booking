import { NextRequest, NextResponse } from "next/server";
import { ApiSuccess } from "@/services/apiResponse";

export async function GET(req: NextRequest) {
  const response = ApiSuccess("Logged out successfully", {});

  // ✅ Clear authToken cookie by setting an expired date
  response.cookies.set("authToken", "", {
    httpOnly: true,
    expires: new Date(0), // Set the cookie expiration to the past
    path: "/",
  });

  return response;
}