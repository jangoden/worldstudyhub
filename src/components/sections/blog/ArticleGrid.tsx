interface Article {
    title: string;
    excerpt: string;
    category: string;
    categoryColor: string;
    date: string;
    readTime: string;
    image: string;
}

const articles: Article[] = [
    {
        title: "5 Ways to Save Mobile Data While Learning Online",
        excerpt: "Data costs shouldn't be a barrier. Here are practical tips to minimize usage on LMS platforms, including offline downloading features.",
        category: "Tech Tips",
        categoryColor: "text-primary",
        date: "Oct 20, 2024",
        readTime: "5 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCysEWGbMigzcq2pkxy5H_4Vco0a_ClMBIhg2EANmq3RDxsdK8QclxhIuUsapkKBR5ekZk49Cn2N08yLWzT-I6a0xUIO8y91_lCdtgFzh3iSBYE_Mx54LDfePnDoxKnodu4-zXqgEEFkfXrEINyxlcD8HinI9sdxET_B-enpQR6tITnmDxx2JpCZKWqSDydL7zsruFMvQeqPY0Aha6Ohh6R2hlc4TsI0NlfDvj8gJT1vRvj0S4U_XoOkntwjCKji3vTEFV_JnHTmG4j"
    },
    {
        title: "Success Story: How Tunde Built a Business",
        excerpt: "After completing the \"Business Management for SMEs\" course, Tunde applied his new financial skills to scale his local logistics company.",
        category: "Success Story",
        categoryColor: "text-green-600",
        date: "Oct 15, 2024",
        readTime: "8 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAahUKhUA-bPs9KmWitp29YOKpSzouXO9KxUGEo518qyCAMScImoLPBMAJf6r5hzLgLY_pTSr-n2FfzrSlB1QxmYYBpZCJWZxC_nSnuvGmyQ_iacdswZF2M-qFg7CvC5eujIbUvYYuhr72xzn6vXpGsWqWc7BLOs1RHQ4RFRjU5GblHdnoA2WGVs4b7f7OSi9xhpnQGINC9PiFmqGBLfAO3JZGJephyCCJmX9UgT5uM1zuX4mbdIFT_2tcLPTcAD0iXhMbQGTmfCHrK"
    },
    {
        title: "Navigating the African FinTech Boom",
        excerpt: "Understanding the rise of digital payments and mobile money. How you can build a career in this rapidly growing sector.",
        category: "FinTech",
        categoryColor: "text-purple-600",
        date: "Oct 12, 2024",
        readTime: "6 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu7C67W8a_AuO2dOZFRTLzfKUzlndhHkyPI_g6pSMFdb1wTuMbUrz74gCyRjTybEWQNppR6MhJ34crWMHzU6lZyfFpZ0KIHVVqkrIfFoOjk1GtWaona1iQbNyUzpcOsSn-vmtUCyxHHBYBwVLQPLBc95XdzoXCs1y7hzjRloJqkLvxnf4mXSSgJGYMLD-Dm3DhgmvB7Q7Nxi0AZQAcjWRsQ71cHHnKP84YRVCC3fnFkhjWPSJm_g24hBFwFjJfF9o6h5lkVbqYo9pU"
    },
    {
        title: "The Future of AI in African Agriculture",
        excerpt: "See how small-scale farmers are using AI-driven insights to predict weather patterns and improve crop yields across the continent.",
        category: "Agriculture",
        categoryColor: "text-emerald-600",
        date: "Oct 10, 2024",
        readTime: "7 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCysEWGbMigzcq2pkxy5H_4Vco0a_ClMBIhg2EANmq3RDxsdK8QclxhIuUsapkKBR5ekZk49Cn2N08yLWzT-I6a0xUIO8y91_lCdtgFzh3iSBYE_Mx54LDfePnDoxKnodu4-zXqgEEFkfXrEINyxlcD8HinI9sdxET_B-enpQR6tITnmDxx2JpCZKWqSDydL7zsruFMvQeqPY0Aha6Ohh6R2hlc4TsI0NlfDvj8gJT1vRvj0S4U_XoOkntwjCKji3vTEFV_JnHTmG4j"
    },
    {
        title: "Mastering Communication for Remote Work",
        excerpt: "Technical skills get you the job, soft skills keep it. Learn how to communicate effectively in asynchronous remote environments.",
        category: "Soft Skills",
        categoryColor: "text-indigo-600",
        date: "Oct 08, 2024",
        readTime: "4 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAahUKhUA-bPs9KmWitp29YOKpSzouXO9KxUGEo518qyCAMScImoLPBMAJf6r5hzLgLY_pTSr-n2FfzrSlB1QxmYYBpZCJWZxC_nSnuvGmyQ_iacdswZF2M-qFg7CvC5eujIbUvYYuhr72xzn6vXpGsWqWc7BLOs1RHQ4RFRjU5GblHdnoA2WGVs4b7f7OSi9xhpnQGINC9PiFmqGBLfAO3JZGJephyCCJmX9UgT5uM1zuX4mbdIFT_2tcLPTcAD0iXhMbQGTmfCHrK"
    },
    {
        title: "Python Zero to Hero: A 30-Day Plan",
        excerpt: "A structured learning path for beginners to master Python programming. Includes free resources and project ideas.",
        category: "Python",
        categoryColor: "text-blue-600",
        date: "Oct 05, 2024",
        readTime: "10 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBml-BUfTGEBY-CK1pACrSxNwN_kdyGAjVRW_-ihja1WtlzN3y9gWWl42_K4J8Ts7rQgSh2faGxXfWZKtkB5b--GMNSvGOXSKCn2Vdb6CFR2lOboaN2_-yNDRuUlb4Vt_H6VUv4a5JQRJkdLWHwsuHTmpN3GippVLIoFv5CuUUj2_oElnYxB4jUj-ztHuIJiyQhBVfxbGERMUzfBkZsvB2RzHPh6zu6DMa_Tq6fFtORATtpFSYU4-Y-AC_XF1S2F8XPbsNJbg-7FdA"
    }
];

export function ArticleGrid() {
    return (
        <div className="mb-20">
            <div className="flex items-center justify-between mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-8 rounded-full bg-primary"></span>
                    Latest Articles
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <article key={index} className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                        <div className="h-56 relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${article.image}")` }}></div>
                            <div className="absolute top-4 left-4">
                                <span className={`px-3 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur ${article.categoryColor} text-xs font-bold uppercase tracking-wide shadow-sm`}>
                                    {article.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 font-medium">
                                <span>{article.date}</span>
                                <span className="size-1 rounded-full bg-slate-300"></span>
                                <span>{article.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm line-clamp-3 leading-relaxed">
                                {article.excerpt}
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                <a href="#" className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
                                    Read More <span className="material-symbols-outlined text-[18px] ml-1 transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
