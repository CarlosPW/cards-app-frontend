import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwt } from "./utils";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  )
    return NextResponse.next();

  const token = request.cookies.get("token") || undefined;

  console.log(request.url);
  console.log(token);
  console.log({ pathname });

  if (
    pathname.startsWith("/auth/signin") ||
    pathname.startsWith("/auth/signup")
  ) {
    if (!token) return NextResponse.next();

    try {
      await jwt.isValidToken(token);
      return NextResponse.redirect(
        new URL("/", "https://cards-app-frontend.vercel.app/")
      );
    } catch (error) {
      return NextResponse.next();
    }
  }

  if (!token) {
    return NextResponse.redirect(
      new URL("/auth/signin", "https://cards-app-frontend.vercel.app/")
    );
  }

  try {
    await jwt.isValidToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(
      new URL("/auth/signin", "https://cards-app-frontend.vercel.app/")
    );
  }
}
