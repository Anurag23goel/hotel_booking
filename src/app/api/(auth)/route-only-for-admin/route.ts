import { ApiSuccess } from "@/services/apiResponse";
import { NextRequest,NextResponse } from "next/server";
// import middlewareForBackendApi from "../../backendApiMiddleware/rooot";

export async function POST(req: NextRequest) {
    console.log("Yeh chalgya ")
   return ApiSuccess("Iloveu");
    // middlewareForBackendApi(req);
}