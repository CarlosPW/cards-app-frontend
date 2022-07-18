import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwt } from "./utils";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const domain = request.nextUrl.clone();
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
    if (!token) return;

    try {
      const payload = await jwt.isValidToken(token);
      console.log({ payload });
      domain.pathname = "/";
      return NextResponse.redirect(domain);
      // return NextResponse.redirect(new URL("/", request.url));
    } catch (error) {
      return;
    }
  }

  if (!token) {
    domain.pathname = "/auth/signin";
    return NextResponse.redirect(domain);
  }

  try {
    const payload = await jwt.isValidToken(token);
    console.log({ payload });
    return NextResponse.next();
  } catch (error) {
    domain.pathname = "/";
    return NextResponse.redirect(domain);
    // return NextResponse.redirect(new URL("/", request.url));
  }
}
