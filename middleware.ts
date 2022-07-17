import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwt } from "./utils";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/_next") || // exclude Next.js internals
    request.nextUrl.pathname.startsWith("/api") || //  exclude all API routes
    request.nextUrl.pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(request.nextUrl.pathname) // exclude all files in the public folder
  )
    return NextResponse.next();

  const url = request.nextUrl.clone();
  const token = request.cookies.get("token") || undefined;

  if (
    request.nextUrl.pathname === "/auth/signin" ||
    request.nextUrl.pathname === "/auth/signup"
  ) {
    if (token) {
      try {
        await jwt.isValidToken(token);
        return NextResponse.redirect(new URL("/", request.url));
      } catch (error) {
        return NextResponse.next();
      }
    } else return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  try {
    await jwt.isValidToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}
