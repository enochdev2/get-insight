import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "./src/lib/authOptions";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session:any = getServerSession(authOptions)
  console.log("🚀 ~ file: middleware.ts:9 ~ middleware ~ sessio:", session)
 

  const publicPaths = path === "/login" || path === "/register";

  if (publicPaths && session.user) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (!publicPaths && session.user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/register",'profile', "/login"],
};
