import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUser } from '@/lib/session';

export async function middleware(request: NextRequest) {
  // 1. Check if user is visiting a protected route
  if (request.nextUrl.pathname.startsWith('/gallery')) {
    const user = await getUser();
    
    // 2. If no user found in cookies, kick them out
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: ['/gallery/:path*'],
};