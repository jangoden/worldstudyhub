'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { TiptapEditor } from '@/components/editor/TiptapEditor'
import { ArrowLeft, Save, Loader2, Upload, Calendar } from 'lucide-react'
import Link from 'next/link'
import { convertImageToWebP } from '@/utils/imageUtils'

export default function CreatePostPage() {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    // const [excerpt, setExcerpt] = useState('') // Removed as per request
    const [categoryId, setCategoryId] = useState('')
    const [categories, setCategories] = useState<{ id: string, name: string }[]>([])

    const [imageUrl, setImageUrl] = useState('')
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [content, setContent] = useState('')
    const [publishedDate, setPublishedDate] = useState(new Date().toISOString().split("T")[0])
    const [isPublished, setIsPublished] = useState(false)
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const supabase = createClient()

    // Fetch categories on mount
    useState(() => {
        const fetchCategories = async () => {
            const { data } = await supabase.from('categories').select('id, name').order('name');
            if (data) {
                setCategories(data);
                if (data.length > 0) setCategoryId(data[0].id); // Default to first
            }
        }
        fetchCategories();
    })

    // Auto-generate slug and basic excerpt logic
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setTitle(val)
        // Generate a clean slug
        const generatedSlug = val.toLowerCase().trim()
            .replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')
        setSlug(generatedSlug)
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return

        const originalFile = e.target.files[0]
        setUploading(true)

        try {
            // Convert to WebP
            const convertedFile = await convertImageToWebP(originalFile, 0.8)

            const fileName = `${Math.random().toString(36).substring(2)}.webp`
            const filePath = `${fileName}`

            const { error: uploadError } = await supabase.storage.from('blog-images').upload(filePath, convertedFile)
            if (uploadError) {
                alert('Error uploading: ' + uploadError.message + '. Make sure "blog-images" bucket exists and is public.')
                setUploading(false)
                return
            }
            const { data } = supabase.storage.from('blog-images').getPublicUrl(filePath)
            setImageUrl(data.publicUrl)
            setImageFile(convertedFile)
        } catch (error) {
            console.error(error)
            alert('Error processing or uploading image')
        } finally {
            setUploading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            alert('You must be logged in')
            setLoading(false)
            return
        }

        // Generate Excerpt from content (strip HTML)
        const plainText = content.replace(/<[^>]+>/g, '');
        const autoExcerpt = plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '');

        // Find category name for legacy support
        const selectedCategory = categories.find(c => c.id === categoryId);

        const { error } = await supabase
            .from('posts')
            .insert({
                title,
                slug,
                excerpt: autoExcerpt, // Auto-generated
                category: selectedCategory?.name || 'Uncategorized', // Legacy string column
                category_id: categoryId, // New Relation
                image_url: imageUrl,
                content,
                is_published: isPublished,
                author_id: user.id,
                created_at: new Date(publishedDate).toISOString(),
            })

        if (error) {
            if (error.code === '23505') {
                alert('Error: The URL Slug "' + slug + '" is already taken.')
            } else {
                alert('Error creating post: ' + error.message)
            }
            setLoading(false)
        } else {
            router.push('/dashboard/posts')
            router.refresh()
        }
    }

    return (
        <div className="max-w-5xl mx-auto pb-20">
            <Link href="/dashboard/posts" className="inline-flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white mb-6">
                <ArrowLeft size={18} className="mr-2" />
                Back to Posts
            </Link>

            <form onSubmit={handleSubmit}>
                <div className="sticky top-4 z-20 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md py-4 mb-8 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Create New Post</h1>
                        <p className="text-sm text-slate-500">Drafting usually usually saves automatically (mock)</p>
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
                            Publish Post
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Editor Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-4">
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={handleTitleChange}
                                className="w-full px-0 py-4 text-3xl md:text-4xl font-extrabold bg-transparent border-none placeholder-slate-300 dark:placeholder-slate-700 focus:ring-0 outline-none transition-all text-slate-900 dark:text-white"
                                placeholder="Post Title"
                            />

                            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                                <TiptapEditor content={content} onChange={setContent} />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Settings Column */}
                    <div className="space-y-6">
                        {/* Publishing Info */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Publishing</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Publish Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={publishedDate}
                                            onChange={(e) => setPublishedDate(e.target.value)}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">URL Slug</label>
                                    <input
                                        type="text"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none text-sm font-mono text-slate-600 dark:text-slate-400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Featured Image</h3>

                            <div className="space-y-4">
                                {imageUrl ? (
                                    <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 group">
                                        <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => setImageUrl('')}
                                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium"
                                        >
                                            Remove Image
                                        </button>
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
                                <input
                                    type="url"
                                    placeholder="Or paste image URL"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs"
                                />
                            </div>
                        </div>

                        {/* Meta Info */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Attributes</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Category</label>
                                    <select
                                        value={categoryId}
                                        onChange={(e) => setCategoryId(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none text-sm appearance-none"
                                    >
                                        <option value="" disabled>Select a category</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                    {categories.length === 0 && (
                                        <p className="text-xs text-red-500 mt-1">No categories found. Create one first.</p>
                                    )}
                                </div>
                                {/* Excerpt removed as requested */}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
