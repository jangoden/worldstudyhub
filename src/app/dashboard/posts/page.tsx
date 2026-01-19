import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Plus } from 'lucide-react'
import { PostsTable } from '@/components/dashboard/PostsTable'

export default async function PostsPage() {
    const supabase = await createClient()

    // Fetch posts ordered by created_at desc
    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div className="max-w-6xl mx-auto pb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Blog Management</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Create, edit, and manage your content.</p>
                </div>
                <Link
                    href="/dashboard/posts/create"
                    className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all active:scale-95 group"
                >
                    <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                    Create New Post
                </Link>
            </div>

            <PostsTable initialPosts={posts || []} />
        </div>
    )
}
