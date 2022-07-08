import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwt } from "../utils";
import Cookies from "js-cookie";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { token } = request.cookies;

  if (
    request.page.name === "/auth/signin" ||
    request.page.name === "/auth/signup"
  ) {
    if (token) {
      try {
        const payload = await jwt.isValidToken(token);

        if (payload) {
          return NextResponse.redirect(new URL("/", request.url));
        }
      } catch (error) {
        return;
      }
    } else {
      return;
    }
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
