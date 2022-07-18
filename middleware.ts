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
  console.log({ token });

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

  if (token === undefined) {
    request.nextUrl.pathname = "/auth/signin";
    console.log(request.nextUrl);
    return NextResponse.redirect(request.nextUrl);

    // return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  try {
    await jwt.isValidToken(token);
    return NextResponse.next();
  } catch (error) {
    request.nextUrl.pathname = "/auth/signin";
    console.log(request.nextUrl);
    return NextResponse.redirect(request.nextUrl);
    // return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}
