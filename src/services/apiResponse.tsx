import { NextResponse } from "next/server";

export function ApiSuccess(message: string, data: any = {}, status: number = 200, cookies?: { name: string; value: string; options?: any }) {
  const response = NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status: status }
  );

  // If cookies are passed, set them in the response
  if (cookies) {
    response.cookies.set(cookies.name, cookies.value, cookies.options || {});
  }

  return response;
}

export function ApiError( error?: any, status: number = 500) {
  console.error(`API Error: `, error?.message || "");

  return NextResponse.json(
    {
      success: false,
      error: error ? error.message || error : undefined, // ✅ Only include error if provided
    },
    { status: status }
  );
}
