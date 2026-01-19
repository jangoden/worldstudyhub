import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { format } from "date-fns";

export async function BlogSidebar() {
    const supabase = await createClient();

    // Fetch Categories with Post Counts
    // Note: This assumes the foreign key 'posts.category_id' -> 'categories.id' is set up.
    // If not, it might fail or return null for posts.
    // We use a safe join if possible, or just fetch categories.
    const { data: categories } = await supabase
        .from('categories')
        .select(`
            name,
            slug,
            posts (count)
        `)
        .order('name');

    // Fetch Recent/Trending Articles (Published)
    // We'll just fetch the 3 most recent for "Trending Now" for simplicity
    const { data: recentPosts } = await supabase
        .from('posts')
        .select('title, slug, created_at, image_url')
        .eq('is_published', true)
        .order('created_at', { ascending: false })
        .limit(3);

    return (
        <aside className="space-y-10 lg:sticky lg:top-24">
            {/* Search */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm shadow-sm outline-none transition-all"
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    search
                </span>
            </div>

            {/* Newsletter - Compact */}
            <div className="bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-500/30">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-[120px]">mail</span>
                </div>
                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">Weekly Highlights</h3>
                    <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                        Join 15,000+ students receiving the best career advice.
                    </p>
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm mb-3 focus:bg-white/20 outline-none transition-all"
                    />
                    <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Topics (Dynamic) */}
            <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full"></span>
                    Categories
                </h3>
                <div className="flex flex-col gap-2">
                    {categories?.map((topic: any) => (
                        <Link
                            key={topic.name}
                            href={`/blog?category=${topic.id}`} // Simple filter via query param
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 group transition-all"
                        >
                            <span className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary transition-colors">
                                {topic.name}
                            </span>
                            <span className="text-xs font-semibold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                                {topic.posts?.[0]?.count || 0}
                            </span>
                        </Link>
                    ))}
                    {(!categories || categories.length === 0) && (
                        <p className="text-sm text-slate-500">No categories found.</p>
                    )}
                </div>
            </div>

            {/* Recent Articles (Dynamic) */}
            <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full"></span>
                    Recent Posts
                </h3>
                <div className="flex flex-col gap-6">
                    {recentPosts?.map((article, i) => (
                        <Link
                            key={i}
                            href={`/blog/${article.slug}`}
                            className="group flex gap-4 items-start"
                        >
                            <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden relative shadow-sm border border-slate-100 dark:border-slate-800">
                                {article.image_url ? (
                                    <img
                                        src={article.image_url}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300">
                                        <span className="material-symbols-outlined text-2xl">image</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-slate-200 leading-snug text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h4>
                                <p className="text-xs text-slate-500 font-medium">
                                    {format(new Date(article.created_at), 'MMM dd, yyyy')}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
}
