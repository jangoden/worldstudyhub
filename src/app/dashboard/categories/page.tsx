import { createClient } from '@/lib/supabase/server';
import { CategoriesTable } from '@/components/dashboard/CategoriesTable';

export const revalidate = 0; // Ensure fresh data on every request

export default async function CategoriesPage() {
    const supabase = await createClient();
    const { data: categories } = await supabase
        .from('categories')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Categories</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                    Manage blog post categories.
                </p>
            </div>

            <CategoriesTable initialCategories={categories || []} />
        </div>
    );
}
