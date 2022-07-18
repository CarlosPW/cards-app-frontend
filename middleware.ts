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

  const token = request.cookies.get("token");

  if (
    pathname.startsWith("/auth/signin") ||
    pathname.startsWith("/auth/signup")
  ) {
    if (!token) return NextResponse.next();

    await jwt
      .isValidToken(token)
      .finally(() => {
        request.nextUrl.pathname = "/";
        return NextResponse.redirect(request.nextUrl);
      })
      .catch(() => {
        request.nextUrl.pathname = "/auth/signin";
        return NextResponse.redirect(request.nextUrl);
      });
  }

  if (!token) {
    request.nextUrl.pathname = "/auth/signin";
    return NextResponse.redirect(request.nextUrl);
  }

  await jwt
    .isValidToken(token)
    .finally(() => NextResponse.next())
    .catch(() => {
      request.nextUrl.pathname = "/auth/signin";
      return NextResponse.redirect(request.nextUrl);
    });
}
