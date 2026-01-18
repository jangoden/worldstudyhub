export function FeaturedArticle() {
    return (
        <div className="mb-20">
            <article className="group grid grid-cols-1 lg:grid-cols-12 gap-0 items-center bg-white dark:bg-surface-dark rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none hover:shadow-3xl transition-all duration-500">
                <div className="lg:col-span-7 h-80 lg:h-[550px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBml-BUfTGEBY-CK1pACrSxNwN_kdyGAjVRW_-ihja1WtlzN3y9gWWl42_K4J8Ts7rQgSh2faGxXfWZKtkB5b--GMNSvGOXSKCn2Vdb6CFR2lOboaN2_-yNDRuUlb4Vt_H6VUv4a5JQRJkdLWHwsuHTmpN3GippVLIoFv5CuUUj2_oElnYxB4jUj-ztHuIJiyQhBVfxbGERMUzfBkZsvB2RzHPh6zu6DMa_Tq6fFtORATtpFSYU4-Y-AC_XF1S2F8XPbsNJbg-7FdA")' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:hidden"></div>
                    <div className="absolute bottom-6 left-6 lg:hidden">
                        <span className="px-4 py-1.5 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wide shadow-lg">
                            Career Guide
                        </span>
                    </div>
                </div>
                <div className="lg:col-span-5 p-8 lg:p-14 flex flex-col justify-center h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                    <div className="hidden lg:flex items-center gap-3 mb-6">
                        <span className="px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/40 text-accent text-xs font-bold uppercase tracking-wide border border-orange-200 dark:border-orange-800">
                            Career Guide
                        </span>
                        <span className="flex items-center gap-1 text-slate-400 text-sm font-medium">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 24, 2026
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                        How to Land Your First Remote Job in 2026
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                        The landscape of remote work is evolving rapidly. Discover the key skills, platforms, and strategies you need to position yourself for global opportunities.
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                            <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-700 shadow-md">
                                <img alt="Author" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwOOMJH9Oi1UBjR22dVZS6i-VdK3Ion2tuyisI2BmyiKhTUOsl-7T8SkQZhJmJLYkQ7As-Kd7qB2PYHgcTFsAGpeokf7Mp7aHawdZxsj9EdwVI6DBfCcEcl3OKh-2HDbhdzHp5YRru3p2u1x7GnD-qjrJYIi1ZcnYfbFhzFdTiv0ewhSgO7r-ekSR5QIaPtwDsq9Sl1diCop1laDV_aSjS8Fhd58NkrVoW0wOpl-vrBRAtaXxfyWsKfLn7p5TIOuc9Mixrm8GQ3S0-" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">David Okeke</p>
                                <p className="text-xs text-slate-500 font-medium">Head of Careers</p>
                            </div>
                        </div>
                        <span className="text-sm font-semibold text-slate-400 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[18px]">schedule</span> 8 min read
                        </span>
                    </div>
                </div>
            </article>
        </div>
    );
}
