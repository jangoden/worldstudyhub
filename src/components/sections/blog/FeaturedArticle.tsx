import Link from "next/link";
import { format } from 'date-fns';

export function FeaturedArticle({ post }: { post: any }) {
    if (!post) return null;

    return (
        <div className="mb-20">
            <article className="group grid grid-cols-1 lg:grid-cols-12 gap-0 items-center bg-white dark:bg-surface-dark rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none hover:shadow-3xl transition-all duration-500">
                <div className="lg:col-span-7 h-80 lg:h-[550px] relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url("${post.image_url || 'https://via.placeholder.com/800x600?text=No+Image'}")` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:hidden"></div>
                    <div className="absolute bottom-6 left-6 lg:hidden">
                        <span className="px-4 py-1.5 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wide shadow-lg">
                            {post.category || 'General'}
                        </span>
                    </div>
                </div>
                <div className="lg:col-span-5 p-8 lg:p-14 flex flex-col justify-center h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                    <div className="hidden lg:flex items-center gap-3 mb-6">
                        <span className="px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/40 text-accent text-xs font-bold uppercase tracking-wide border border-orange-200 dark:border-orange-800">
                            {post.category || 'General'}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400 text-sm font-medium">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            {format(new Date(post.created_at), 'MMM dd, yyyy')}
                        </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-primary transition-colors cursor-pointer line-clamp-3">
                            {post.title}
                        </h2>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed line-clamp-4">
                        {post.excerpt || 'Read the full story to learn more...'}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                            <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-700 shadow-md">
                                <span className="w-full h-full flex items-center justify-center text-slate-400 font-bold bg-slate-300 dark:bg-slate-600">
                                    {/* Fallback avatar for Author */}
                                    A
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Admin</p>
                                <p className="text-xs text-slate-500 font-medium">Author</p>
                            </div>
                        </div>
                        <span className="text-sm font-semibold text-slate-400 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                            {/* Simple read time estimation: 200 words per minute */}
                            {Math.ceil((post.content?.split(' ').length || 0) / 200)} min read
                        </span>
                    </div>
                </div>
            </article>
        </div>
    );
}
