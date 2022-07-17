import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwt } from "./utils";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();
  const token = request.cookies.get("token") || undefined;

  if (
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  )
    return NextResponse.next();

  if (
    pathname.startsWith("/auth/signin") ||
    pathname.startsWith("/auth/signup")
  ) {
    if (token) {
      try {
        await jwt.isValidToken(token);
        return NextResponse.rewrite(new URL("/", request.url));
      } catch (error) {
        return NextResponse.next();
      }
    } else return NextResponse.next();
  }

  if (!token) {
    return NextResponse.rewrite(new URL("/auth/signin", request.url));
  }

  try {
    await jwt.isValidToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.rewrite(new URL("/auth/signin", request.url));
  }
}
