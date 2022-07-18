import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwt } from "./utils";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    PUBLIC_FILE.test(pathname)
  )
    return NextResponse.next();

  const token = request.cookies.get("token") || undefined;

  if (
    pathname.startsWith("/auth/signin") ||
    pathname.startsWith("/auth/signup")
  ) {
    return NextResponse.next();

    // if (!token) return;

    // try {
    //   const payload = await jwt.isValidToken(token);
    //   console.log({ payload });
    //   return NextResponse.redirect(new URL("/", request.url));
    // } catch (error) {
    //   return;
    // }
  }

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  try {
    const payload = await jwt.isValidToken(token);
    console.log({ payload });
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}
