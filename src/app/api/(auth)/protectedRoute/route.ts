import { NextRequest, NextResponse } from "next/server";
import middlewareForBackendApi from "../../backendMiddleware";
import { ApiSuccess, ApiError } from "@/services/apiResponse";

export async function GET(req: NextRequest) {
  // Check if request is authorized
  const isAuthorized = await middlewareForBackendApi(req);
  if (isAuthorized !== true) return isAuthorized; // Return the error if unauthorized

  // Access user data
  const user = (req as any).user;

  return ApiSuccess("Protected data accessed", { user });
}
