import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export default async function proxy(request: NextRequest) {
    // 1. Safety Check: Ensure keys exist before creating client
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.warn('⚠️  Supabase keys are missing or invalid in middleware. Skipping authentication checks.')
        return NextResponse.next()
    }

    let supabaseResponse = NextResponse.next({
        request,
    })

    // 2. Create client
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set(name, value)
                    )
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // 3. Refresh session
    // Careful: getUser can throw network errors if URL is invalid, so we wrap in try/catch just in case
    try {
        const {
            data: { user },
        } = await supabase.auth.getUser()

        // 4. Protected routes logic
        if (request.nextUrl.pathname.startsWith('/dashboard')) {
            if (!user) {
                return NextResponse.redirect(new URL('/login', request.url))
            }
        }

        // 5. Auth routes logic (redirect to dashboard if already logged in)
        if (request.nextUrl.pathname.startsWith('/login') && user) {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    } catch (e) {
        console.error('Middleware Supabase Error:', e)
    }

    return supabaseResponse
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
