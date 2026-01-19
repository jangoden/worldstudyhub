import Link from "next/link";
import { format } from 'date-fns';

export function ArticleGrid({ posts }: { posts: any[] }) {
    return (
        <div className="mb-20">
            <div className="flex items-center justify-between mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-8 rounded-full bg-primary"></span>
                    Latest Articles
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.length === 0 ? (
                    <div className="col-span-3 text-center py-12 text-slate-400">
                        No more articles found.
                    </div>
                ) : (
                    posts.map((post) => (
                        <article key={post.id} className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                            <div className="h-56 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${post.image_url || 'https://via.placeholder.com/600x400?text=No+Image'}")` }}
                                ></div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur text-primary text-xs font-bold uppercase tracking-wide shadow-sm">
                                        {post.category || 'Article'}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 font-medium">
                                    <span>{format(new Date(post.created_at), 'MMM dd, yyyy')}</span>
                                    <span className="size-1 rounded-full bg-slate-300"></span>
                                    <span>{Math.ceil((post.content?.split(' ').length || 0) / 200)} min read</span>
                                </div>

                                <Link href={`/blog/${post.slug}`}>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm line-clamp-3 leading-relaxed">
                                    {post.excerpt || 'No summary available.'}
                                </p>
                                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
                                    >
                                        Read More <span className="material-symbols-outlined text-[18px] ml-1 transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    )))}
            </div>
        </div>
    );
}
