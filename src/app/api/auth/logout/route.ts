import { cookies } from "next/headers";
import { ApiSuccess , ApiError } from "@/services/apiResponse";

export async function POST(){
  try {
    const authTokenCookie = await cookies();
    console.log("cookieStore in the logout route is -> ", authTokenCookie);
    authTokenCookie.delete("authToken");
    authTokenCookie.delete("user");
    

    return ApiSuccess("Logged out successfully");
  } catch (error) {
    return ApiError("Failed to logout");
  }
}
