'use client'

import { useState } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import {
    Edit3,
    Trash2,
    Eye,
    MoreHorizontal,
    Search,
    Filter,
    Image as ImageIcon,
    AlertCircle
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

type Post = {
    id: string
    title: string
    slug: string
    category: string
    created_at: string
    is_published: boolean
    image_url: string | null
    views?: number
}

export function PostsTable({ initialPosts }: { initialPosts: Post[] }) {
    const [posts, setPosts] = useState(initialPosts)
    const [search, setSearch] = useState('')
    const [deletingId, setDeletingId] = useState<string | null>(null)

    const supabase = createClient()

    // Filter posts
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.category?.toLowerCase().includes(search.toLowerCase())
    )

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) return

        setDeletingId(id)
        const { error } = await supabase.from('posts').delete().eq('id', id)

        if (error) {
            alert('Error deleting: ' + error.message)
        } else {
            setPosts(posts.filter(p => p.id !== id))
        }
        setDeletingId(null)
    }

    const handleToggleStatus = async (id: string, currentStatus: boolean) => {
        // Optimistic update
        const newStatus = !currentStatus
        setPosts(posts.map(p => p.id === id ? { ...p, is_published: newStatus } : p))

        const { error } = await supabase
            .from('posts')
            .update({ is_published: newStatus })
            .eq('id', id)

        if (error) {
            // Revert if error
            setPosts(posts.map(p => p.id === id ? { ...p, is_published: currentStatus } : p))
            alert('Error updating status')
        }
    }

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Table Toolbar */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by title or category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium text-sm">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                            <th className="px-6 py-4 w-[40%]">Article</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4 text-center">Views</th>
                            <th className="px-6 py-4">Published Date</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                        {filteredPosts.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center">
                                    <div className="flex flex-col items-center justify-center text-slate-400">
                                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                                            <Search size={32} />
                                        </div>
                                        <p className="text-lg font-medium text-slate-900 dark:text-white">No posts found</p>
                                        <p className="text-sm">Try adjusting your search terms</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            filteredPosts.map((post) => (
                                <tr key={post.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            {/* Thumbnail */}
                                            <div className="w-16 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0 relative border border-slate-200 dark:border-slate-600">
                                                {post.image_url ? (
                                                    <img src={post.image_url} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                                        <ImageIcon size={20} />
                                                    </div>
                                                )}
                                            </div>
                                            {/* Info */}
                                            <div>
                                                <Link href={`/dashboard/posts/edit/${post.id}`} className="font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors line-clamp-1 block mb-0.5">
                                                    {post.title}
                                                </Link>
                                                <div className="text-xs text-slate-500 font-mono">
                                                    /{post.slug}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => handleToggleStatus(post.id, post.is_published)}
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border transition-all active:scale-95 ${post.is_published
                                                ? 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                                                : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600'
                                                }`}>
                                            {post.is_published ? 'Published' : 'Draft'}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center text-sm text-slate-600 dark:text-slate-300">
                                            {post.category || 'Uncategorized'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 font-medium">
                                            <Eye size={16} className="text-slate-400" />
                                            {post.views || 0}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-600 dark:text-slate-300">
                                            {format(new Date(post.created_at), 'MMM dd, yyyy')}
                                        </div>
                                        <div className="text-xs text-slate-400">
                                            {format(new Date(post.created_at), 'K:mm a')}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href={`/dashboard/posts/edit/${post.id}`}
                                                className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                                title="Edit Post"
                                            >
                                                <Edit3 size={18} />
                                            </Link>
                                            {post.is_published && (
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    target="_blank"
                                                    className="p-2 text-slate-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                                                    title="View Live"
                                                >
                                                    <Eye size={18} />
                                                </Link>
                                            )}
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                disabled={deletingId === post.id}
                                                className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                                                title="Delete Post"
                                            >
                                                {deletingId === post.id ? (
                                                    <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <Trash2 size={18} />
                                                )}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-xs text-slate-500 flex justify-between items-center">
                <span>Showing {filteredPosts.length} post{filteredPosts.length !== 1 && 's'}</span>
                <div>
                    {/* Pagination Placeholder */}
                </div>
            </div>
        </div>
    )
}
