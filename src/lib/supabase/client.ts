import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    // Graceful fallback to prevent app crash if keys are missing during development
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

    if (!url || !key) {
        console.error('⚠️ Supabase keys missing in client component. Check .env.local')
    }

    return createBrowserClient(url, key)
}
