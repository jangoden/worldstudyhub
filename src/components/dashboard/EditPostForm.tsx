'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { TiptapEditor } from '@/components/editor/TiptapEditor'
import { ArrowLeft, Save, Loader2, Upload, Trash2 } from 'lucide-react'
import Link from 'next/link'

type Post = {
    id: string
    title: string
    slug: string
    excerpt: string | null
    content: string | null
    category: string | null
    image_url: string | null
    is_published: boolean
    created_at: string
}

export function EditPostForm({ post }: { post: Post }) {
    const [title, setTitle] = useState(post.title)
    const [slug, setSlug] = useState(post.slug)
    const [excerpt, setExcerpt] = useState(post.excerpt || '')
    const [category, setCategory] = useState(post.category || '')
    const [imageUrl, setImageUrl] = useState(post.image_url || '')
    const [content, setContent] = useState(post.content || '')
    const [publishedDate, setPublishedDate] = useState(new Date(post.created_at).toISOString().split("T")[0])
    const [isPublished, setIsPublished] = useState(post.is_published)
    const [loading, setLoading] = useState(false)
    const [uploading, setUploading] = useState(false)

    const router = useRouter()
    const supabase = createClient()

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setTitle(val)
        // Note: We intentionally do NOT auto-update slug on edit to avoid breaking existing links.
    }

    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        // Clean slug in real-time
        const cleanSlug = val.toLowerCase()
            .replace(/\s+/g, '-')     // Spaces to hyphens
            .replace(/[^\w-]/g, '')   // Remove weird chars
            .replace(/-+/g, '-')      // No multi-hyphens
        setSlug(cleanSlug)
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return

        const file = e.target.files[0]
        setUploading(true)

        try {
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
            const filePath = `${fileName}`

            const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(filePath, file)

            if (uploadError) throw uploadError

            const { data } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filePath)

            setImageUrl(data.publicUrl)
        } catch (error: any) {
            alert('Error uploading image: ' + error.message)
        } finally {
            setUploading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { error } = await supabase
            .from('posts')
            .update({
                title,
                slug,
                excerpt,
                category,
                image_url: imageUrl,
                content,
                is_published: isPublished,
                created_at: new Date(publishedDate).toISOString(),
                updated_at: new Date().toISOString()
            })
            .eq('id', post.id)

        if (error) {
            if (error.code === '23505') {
                alert('Error: The URL Slug "' + slug + '" is already taken. Please change it to something unique.')
            } else {
                alert('Error updating post: ' + error.message)
            }
            setLoading(false)
        } else {
            router.push('/dashboard/posts')
            router.refresh()
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto pb-20">
            <div className="flex items-center justify-between mb-6">
                <Link href="/dashboard/posts" className="inline-flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Posts
                </Link>
                {/* Delete Button (Extra convenience) */}
                <button
                    type="button"
                    onClick={async () => {
                        if (confirm('Delete this post?')) {
                            await supabase.from('posts').delete().eq('id', post.id)
                            router.push('/dashboard/posts')
                            router.refresh()
                        }
                    }}
                    className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center gap-1"
                >
                    <Trash2 size={16} />
                    Delete Post
                </button>
            </div>

            <div className="sticky top-4 z-20 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md py-4 mb-8 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Edit Post</h1>
                    <p className="text-sm text-slate-500">Making changes to <span className="font-mono text-xs bg-slate-200 dark:bg-slate-800 px-1 rounded">{post.slug}</span></p>
                </div>
                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => setIsPublished(!isPublished)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors border ${isPublished
                            ? 'bg-green-100 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-400'
                            : 'bg-orange-100 border-orange-200 text-orange-700 dark:bg-orange-900/30 dark:border-orange-800 dark:text-orange-400'
                            }`}
                    >
                        {isPublished ? 'Status: Published' : 'Status: Draft'}
                    </button>
                    <button
                        type="submit"
                        disabled={loading || uploading}
                        className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/25 transition-all active:scale-95 disabled:opacity-70"
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                        Save Changes
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full px-0 py-4 text-3xl md:text-4xl font-extrabold bg-transparent border-none placeholder-slate-300 dark:placeholder-slate-700 focus:ring-0 outline-none transition-all text-slate-900 dark:text-white"
                        placeholder="Post Title"
                    />

                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden min-h-[500px]">
                        <TiptapEditor content={content} onChange={setContent} />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Settings</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Date</label>
                                <input
                                    type="date"
                                    value={publishedDate}
                                    onChange={(e) => setPublishedDate(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Slug</label>
                                <input
                                    type="text"
                                    value={slug}
                                    onChange={handleSlugChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none text-sm font-mono text-slate-600 dark:text-slate-400"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Category</label>
                                <input
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Featured Image</h3>
                        <div className="space-y-4">
                            {imageUrl ? (
                                <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 group">
                                    <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <label className="cursor-pointer px-3 py-1.5 bg-white text-slate-900 rounded-lg text-xs font-bold hover:bg-slate-100">
                                            Change
                                            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setImageUrl('')}
                                            className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-bold hover:bg-red-600"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <label className={`
                                    flex flex-col items-center justify-center w-full aspect-video rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 
                                    bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer
                                    ${uploading ? 'opacity-50 pointer-events-none' : ''}
                                `}>
                                    {uploading ? (
                                        <Loader2 className="animate-spin text-primary" size={24} />
                                    ) : (
                                        <>
                                            <Upload className="text-slate-400 mb-2" size={24} />
                                            <span className="text-sm text-slate-500 font-medium">Click to upload</span>
                                        </>
                                    )}
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                </label>
                            )}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Summary</h3>
                        <textarea
                            rows={4}
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none"
                            placeholder="Short summary..."
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}
