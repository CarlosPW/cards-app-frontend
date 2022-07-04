import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import Cookies from "js-cookie";
import { jwt } from "../utils";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (
    request.page.name === "/auth/signin" ||
    request.page.name === "/auth/signup"
  )
    return;

  const { token } = request.cookies;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  try {
    await jwt.isValidToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(`/auth/signin`);
  }
}
