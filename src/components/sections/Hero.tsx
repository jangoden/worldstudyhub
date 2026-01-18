export function Hero() {
    return (
        <section className="relative w-full py-8 md:py-12 lg:py-20 overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-cover bg-[65%_center] lg:bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/banner-hero.webp')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/90 to-slate-50/20 lg:bg-gradient-to-r lg:from-slate-50 lg:via-slate-50/95 lg:to-slate-50/10 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900/20 dark:lg:from-slate-900 dark:lg:via-slate-900/95 dark:lg:to-slate-900/10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="flex flex-col gap-4 lg:gap-6 text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 w-fit border border-blue-100 dark:border-blue-800 shadow-sm">
                        <span className="text-sm font-bold text-primary">🚀 #1 Learning Platform in Africa</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
                        Master In-Demand Skills <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Without Limits.</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                        Join over 500,000 learners accessing world-class education. Download courses offline, pay locally, and get certified to boost your career.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex items-center justify-center gap-2 h-14 px-8 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-orange-500/20 active:translate-y-[1px] hover:cursor-pointer">
                            <span>Explore Courses</span>
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 h-14 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:border-primary hover:text-primary transition-all shadow-sm hover:cursor-pointer">
                            <span>View Scholarship</span>
                            <span className="material-symbols-outlined text-[20px]">school</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex -space-x-3">
                            <div className="size-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900"></div>
                            <div className="size-8 rounded-full bg-slate-300 border-2 border-white dark:border-slate-900"></div>
                            <div className="size-8 rounded-full bg-slate-400 border-2 border-white dark:border-slate-900"></div>
                            <div className="size-8 rounded-full bg-slate-500 border-2 border-white dark:border-slate-900 text-white flex items-center justify-center text-[10px] font-bold">+2k</div>
                        </div>
                        <p>Students joined this week</p>
                    </div>
                </div>

                {/* Visual */}
                <div className="hidden lg:flex relative z-10 lg:h-[600px] items-center justify-center pointer-events-none lg:pointer-events-auto">
                    {/* Removed existing gradient blobs to let banner show through more clearly on the right */}
                    <div className="relative w-full aspect-square max-w-lg flex items-center justify-center">
                        <div className="absolute top-[20%] left-0 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="size-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-semibold uppercase">Certified</p>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Global Standard</p>
                            </div>
                        </div>

                        <div className="absolute bottom-[20%] right-0 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-pulse" style={{ animationDuration: '4s' }}>
                            <div className="size-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400">
                                <span className="material-symbols-outlined">wifi_off</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-semibold uppercase">Mode</p>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Offline Ready</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
