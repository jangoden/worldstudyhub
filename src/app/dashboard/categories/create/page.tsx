'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';


export default function CreateCategoryPage() {
    const router = useRouter();
    const supabase = createClient();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        slug: ''
    });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        // Simple slugify: lowercase, replace spaces with dashes, remove non-chars
        const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
        setFormData({ name, slug });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase.from('categories').insert({
                name: formData.name,
                slug: formData.slug
            });

            if (error) throw error;

            router.push('/dashboard/categories');
            router.refresh();
        } catch (error: any) {
            alert('Error creating category: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard/categories"
                    className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    <ArrowLeft size={20} className="text-slate-500" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">New Category</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Add a new category for blog posts.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                        Category Name
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleNameChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="e.g. Technology"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                        Slug
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-mono text-sm"
                        placeholder="e.g. technology"
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <Save size={20} />
                                <span>Create Category</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
