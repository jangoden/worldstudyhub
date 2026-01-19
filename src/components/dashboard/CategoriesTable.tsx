'use client';

import { useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Trash2, Plus, Search } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

type Category = {
    id: string;
    name: string;
    slug: string;
    created_at: string;
};

export function CategoriesTable({ initialCategories }: { initialCategories: Category[] }) {
    const [categories, setCategories] = useState(initialCategories);
    const [search, setSearch] = useState('');
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const supabase = createClient();

    const filteredCategories = categories.filter((cat) =>
        cat.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this category?')) return;

        setDeletingId(id);
        const { error } = await supabase.from('categories').delete().eq('id', id);

        if (error) {
            alert('Error deleting: ' + error.message);
        } else {
            setCategories(categories.filter((c) => c.id !== id));
        }
        setDeletingId(null);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Toolbar */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search categories..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                </div>
                <Link
                    href="/dashboard/categories/create"
                    className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-blue-600 transition-colors font-medium shadow-lg shadow-blue-500/20"
                >
                    <Plus size={20} />
                    <span>New Category</span>
                </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Slug</th>
                            <th className="px-6 py-4">Created At</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                        {filteredCategories.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                    No categories found.
                                </td>
                            </tr>
                        ) : (
                            filteredCategories.map((category) => (
                                <tr key={category.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                        {category.name}
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 font-mono text-sm">
                                        {category.slug}
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-sm">
                                        {format(new Date(category.created_at), 'MMM dd, yyyy')}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleDelete(category.id)}
                                            disabled={deletingId === category.id}
                                            className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                                            title="Delete Category"
                                        >
                                            {deletingId === category.id ? (
                                                <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <Trash2 size={18} />
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
