import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

// Middleware function
export async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  // Retrieve the token to check if the user is logged in
  const token = await getToken({ req });

  // If user is logged in and trying to access /login, redirect to the callback or home page
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL(callbackUrl, req.url));
  }

  // If user is not logged in and trying to access /profile or /add-listing, redirect to /login
  if (
    !token &&
    (pathname.startsWith("/profile") || pathname === "/add-listing")
  ) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url); // Set the current page as callback URL for redirection post-login
    return NextResponse.redirect(loginUrl);
  }

  // Proceed with the request
  return NextResponse.next();
}

// Configuring the middleware to match the full page routes
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], // Match all pages except files, _next folder, and APIs
};
