// import { withAuth } from 'next-auth/middleware';

// export default withAuth({
//   pages: {
//     signIn: '/login' 
//   }
// });

// export const config = {
//   matcher: ['/biblioteca','/perfil','/carrito','/estado']
// };
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '../i18n.config'
import { getToken } from 'next-auth/jwt'

// Define protected routes
const protectedPaths = ['/biblioteca', '/perfil', '/carrito', '/estado']

// Get all protected routes including locales
function getProtectedRoutes(protectedPaths: string[], locales: string[]) {
  const protectedPathsWithLocale = new Set(protectedPaths)

  protectedPaths.forEach(route => {
    locales.forEach(locale => {
      protectedPathsWithLocale.add(`/${locale}${route}`)
    })
  })

  return Array.from(protectedPathsWithLocale)
}

// Simple locale matcher to replace `Negotiator` and `intl-localematcher`
function matchLocale(acceptLang: string[], supportedLocales: string[], defaultLocale: string) {
  for (const lang of acceptLang) {
    const primaryLang = lang.split('-')[0]
    if (supportedLocales.includes(primaryLang)) {
      return primaryLang
    }
  }
  return defaultLocale
}

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || ''
  const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim())

  const supportedLocales = [...i18n.locales] // Convert readonly array to mutable array
  return matchLocale(languages, supportedLocales, i18n.defaultLocale)
}

// Middleware function
const middleware = withAuth(
  async function middleware(request: NextRequest) {
    const token = await getToken({ req: request }) // Use getToken to retrieve token
    const pathname = request.nextUrl.pathname

    // Check if the pathname is missing a locale
    const pathnameIsMissingLocale = i18n.locales.every(
      locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Get all protected routes with locales
    const protectedPathsWithLocale = getProtectedRoutes(protectedPaths, [...i18n.locales]) // Convert readonly array

    // Redirect to login if the path is protected and user is not authenticated
    if (!token && protectedPathsWithLocale.includes(pathname)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Redirect to the correct locale if missing
    if (pathnameIsMissingLocale) {
      const locale = getLocale(request)
      return NextResponse.redirect(
        new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
      )
    }

    return NextResponse.next() // Proceed if no redirects are needed
  },
  {
    callbacks: {
      authorized: () => true // Modify this if you need custom authorization logic
    }
  }
)

export default middleware
