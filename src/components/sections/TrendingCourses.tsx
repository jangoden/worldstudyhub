export function TrendingCourses() {
    const courses = [
        {
            title: "Python for Data Analysis: Beginner to Pro",
            category: "Technology",
            categoryColor: "text-primary",
            rating: 4.8,
            reviews: "1.2k",
            price: "₦ 5,000",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBml-BUfTGEBY-CK1pACrSxNwN_kdyGAjVRW_-ihja1WtlzN3y9gWWl42_K4J8Ts7rQgSh2faGxXfWZKtkB5b--GMNSvGOXSKCn2Vdb6CFR2lOboaN2_-yNDRuUlb4Vt_H6VUv4a5JQRJkdLWHwsuHTmpN3GippVLIoFv5CuUUj2_oElnYxB4jUj-ztHuIJiyQhBVfxbGERMUzfBkZsvB2RzHPh6zu6DMa_Tq6fFtORATtpFSYU4-Y-AC_XF1S2F8XPbsNJbg-7FdA"
        },
        {
            title: "Modern Sustainable Farming Techniques",
            category: "Agriculture",
            categoryColor: "text-green-600",
            rating: 4.9,
            reviews: "850",
            price: "₦ 3,500",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu7C67W8a_AuO2dOZFRTLzfKUzlndhHkyPI_g6pSMFdb1wTuMbUrz74gCyRjTybEWQNppR6MhJ34crWMHzU6lZyfFpZ0KIHVVqkrIfFoOjk1GtWaona1iQbNyUzpcOsSn-vmtUCyxHHBYBwVLQPLBc95XdzoXCs1y7hzjRloJqkLvxnf4mXSSgJGYMLD-Dm3DhgmvB7Q7Nxi0AZQAcjWRsQ71cHHnKP84YRVCC3fnFkhjWPSJm_g24hBFwFjJfF9o6h5lkVbqYo9pU"
        },
        {
            title: "Digital Marketing Fundamentals for SMEs",
            category: "Business",
            categoryColor: "text-blue-600",
            rating: 4.5,
            reviews: "2.1k",
            price: "₦ 4,200",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAahUKhUA-bPs9KmWitp29YOKpSzouXO9KxUGEo518qyCAMScImoLPBMAJf6r5hzLgLY_pTSr-n2FfzrSlB1QxmYYBpZCJWZxC_nSnuvGmyQ_iacdswZF2M-qFg7CvC5eujIbUvYYuhr72xzn6vXpGsWqWc7BLOs1RHQ4RFRjU5GblHdnoA2WGVs4b7f7OSi9xhpnQGINC9PiFmqGBLfAO3JZGJephyCCJmX9UgT5uM1zuX4mbdIFT_2tcLPTcAD0iXhMbQGTmfCHrK"
        },
        {
            title: "Graphic Design Masterclass: Adobe Suite",
            category: "Design",
            categoryColor: "text-purple-600",
            rating: 4.7,
            reviews: "980",
            price: "₦ 6,000",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCysEWGbMigzcq2pkxy5H_4Vco0a_ClMBIhg2EANmq3RDxsdK8QclxhIuUsapkKBR5ekZk49Cn2N08yLWzT-I6a0xUIO8y91_lCdtgFzh3iSBYE_Mx54LDfePnDoxKnodu4-zXqgEEFkfXrEINyxlcD8HinI9sdxET_B-enpQR6tITnmDxx2JpCZKWqSDydL7zsruFMvQeqPY0Aha6Ohh6R2hlc4TsI0NlfDvj8gJT1vRvj0S4U_XoOkntwjCKji3vTEFV_JnHTmG4j"
        }
    ];

    return (
        <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Trending Courses</h2>
                        <p className="text-slate-600 dark:text-slate-400">Top-rated skills being learned right now.</p>
                    </div>
                    <a className="hidden sm:flex items-center gap-1 text-primary font-bold hover:underline" href="#">
                        Browse All
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <article key={course.title} className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                            <div className="relative aspect-[4/3] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${course.image}")` }}></div>
                                <div className={`absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm ${course.categoryColor} text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-sm`}>
                                    {course.category}
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">{course.title}</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-yellow-400 text-lg">star</span>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{course.rating}</span>
                                    <span className="text-sm text-slate-400">({course.reviews} reviews)</span>
                                </div>
                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                                    <div className="text-lg font-bold text-slate-900 dark:text-white">{course.price}</div>
                                    <button className="text-sm font-semibold text-primary hover:text-blue-700 hover:cursor-pointer">View Details</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
