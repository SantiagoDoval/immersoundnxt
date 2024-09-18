// import { withAuth } from 'next-auth/middleware';

// export default withAuth({
//   pages: {
//     signIn: '/login' 
//   }
// });

// export const config = {
//   matcher: ['/biblioteca','/perfil','/carrito','/estado']
// };
import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const protectedPaths = ['/biblioteca', '/perfil', '/carrito', '/estado'];

function getProtectedRoutes(protectedPaths: string[]): string[] {
  return protectedPaths.map((path) => path); // Edge Runtime doesn't support nested loops
}

function getRedirectUrl(request: NextRequest): string | undefined {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Check if a trailing slash is needed for non-root paths
  const needsTrailingSlash = !pathname.endsWith('/') && pathname !== '/';

  // Determine default locale if not explicitly provided
  const defaultLocale = 'en'; // Assuming 'en' as default, customize if needed

  // Redirect to login if not authenticated for protected routes
  if (!request.nextUrl.pathname.startsWith('/api/auth/session') && protectedPaths.includes(pathname)) {
    const callbackUrl = encodeURIComponent(url.toString());
    return `/login?callbackUrl=${callbackUrl}`;
  }

  // Redirect to the default locale if no locale is present
  if (!pathname.startsWith(`/${defaultLocale}/`) && pathname !== `/${defaultLocale}`) {
    return `/${defaultLocale}${needsTrailingSlash ? '/' : ''}${pathname}`;
  }

  return undefined; // No redirect needed
}

const middleware = withAuth(
  function middleware(request) {
    const redirectUrl = getRedirectUrl(request);
    if (redirectUrl) {
      return NextResponse.redirect(new URL(redirectUrl, request.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Simple authorization check
    },
  }
);

export default middleware;