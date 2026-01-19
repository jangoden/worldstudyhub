import Link from "next/link";
import Image from "next/image";

interface RelatedArticle {
    title: string;
    image: string;
    slug: string;
    date: string;
}

export function BlogSidebar() {
    const topics = [
        { name: "Student Life", count: 12 },
        { name: "Scholarships", count: 8 },
        { name: "Career Guide", count: 15 },
        { name: "Study Abroad", count: 24 },
        { name: "Language Learning", count: 6 },
    ];

    const relatedArticles: RelatedArticle[] = [
        {
            title: "Top 10 Universities in Europe for International Students",
            slug: "top-universities-europe",
            date: "Oct 20, 2026",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDBml-BUfTGEBY-CK1pACrSxNwN_kdyGAjVRW_-ihja1WtlzN3y9gWWl42_K4J8Ts7rQgSh2faGxXfWZKtkB5b--GMNSvGOXSKCn2Vdb6CFR2lOboaN2_-yNDRuUlb4Vt_H6VUv4a5JQRJkdLWHwsuHTmpN3GippVLIoFv5CuUUj2_oElnYxB4jUj-ztHuIJiyQhBVfxbGERMUzfBkZsvB2RzHPh6zu6DMa_Tq6fFtORATtpFSYU4-Y-AC_XF1S2F8XPbsNJbg-7FdA",
        },
        {
            title: "How to specificy Ace Your IELTS Exam",
            slug: "ace-ielts-exam",
            date: "Sep 15, 2026",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAwOOMJH9Oi1UBjR22dVZS6i-VdK3Ion2tuyisI2BmyiKhTUOsl-7T8SkQZhJmJLYkQ7As-Kd7qB2PYHgcTFsAGpeokf7Mp7aHawdZxsj9EdwVI6DBfCcEcl3OKh-2HDbhdzHp5YRru3p2u1x7GnD-qjrJYIi1ZcnYfbFhzFdTiv0ewhSgO7r-ekSR5QIaPtwDsq9Sl1diCop1laDV_aSjS8Fhd58NkrVoW0wOpl-vrBRAtaXxfyWsKfLn7p5TIOuc9Mixrm8GQ3S0-",
        },
        {
            title: "Budgeting Tips for Students in the UK",
            slug: "budgeting-tips-uk",
            date: "Aug 28, 2026",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDBml-BUfTGEBY-CK1pACrSxNwN_kdyGAjVRW_-ihja1WtlzN3y9gWWl42_K4J8Ts7rQgSh2faGxXfWZKtkB5b--GMNSvGOXSKCn2Vdb6CFR2lOboaN2_-yNDRuUlb4Vt_H6VUv4a5JQRJkdLWHwsuHTmpN3GippVLIoFv5CuUUj2_oElnYxB4jUj-ztHuIJiyQhBVfxbGERMUzfBkZsvB2RzHPh6zu6DMa_Tq6fFtORATtpFSYU4-Y-AC_XF1S2F8XPbsNJbg-7FdA",
        },
    ];

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

            {/* Topics */}
            <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full"></span>
                    Popular Topics
                </h3>
                <div className="flex flex-col gap-2">
                    {topics.map((topic) => (
                        <Link
                            key={topic.name}
                            href={`/blog/topic/${topic.name.toLowerCase().replace(" ", "-")}`}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 group transition-all"
                        >
                            <span className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary transition-colors">
                                {topic.name}
                            </span>
                            <span className="text-xs font-semibold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                                {topic.count}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Related Articles */}
            <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full"></span>
                    Trending Now
                </h3>
                <div className="flex flex-col gap-6">
                    {relatedArticles.map((article, i) => (
                        <Link
                            key={i}
                            href={`/blog/${article.slug}`}
                            className="group flex gap-4 items-start"
                        >
                            <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden relative shadow-sm">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-slate-200 leading-snug text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h4>
                                <p className="text-xs text-slate-500 font-medium">
                                    {article.date}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
}
