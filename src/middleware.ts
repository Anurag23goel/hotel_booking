import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Define protected routes (only accessible to logged-in users)
const protectedRoutes = ["/dashboard", "/profile", "/protected"];
const publicRoutes = ["/login","/register"]


export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value; // Get JWT from cookies  

  // ✅ If the user is NOT authenticated and trying to access a protected route
  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login
  }

  // ✅ If the user is authenticated and tries to visit login or register, redirect to dashboard
  if (token && publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }


  return NextResponse.next(); // Allow request to continue
}

// Apply middleware to all routes
export const config = {
  matcher: ["/dashboard", "/login", "/register", "/protected", ], // Define the routes middleware applies to
};