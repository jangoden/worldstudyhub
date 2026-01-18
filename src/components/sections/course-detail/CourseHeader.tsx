export function CourseHeader() {
    return (
        <section className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark pt-8 pb-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <a className="hover:text-primary transition-colors" href="#">Home</a>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <a className="hover:text-primary transition-colors" href="#">Courses</a>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <a className="hover:text-primary transition-colors" href="#">Agriculture</a>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-slate-900 dark:text-white font-medium">Poultry</span>
                </nav>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="space-y-4 max-w-4xl">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-amber-200 dark:border-amber-800">Best Seller</span>
                            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-green-200 dark:border-green-800">Beginner Friendly</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">Agri-Tech: Modern Poultry Farming</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                            Master sustainable techniques, disease management, and modern technology to maximize yield and profit in the African poultry market.
                        </p>
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-yellow-400 text-xl fill-current">star</span>
                                <span className="text-base font-bold text-slate-900 dark:text-white">4.9</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">(1.2k reviews)</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                                <span className="material-symbols-outlined text-lg">language</span>
                                <span>English, Swahili</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                                <span className="material-symbols-outlined text-lg">schedule</span>
                                <span>Last updated March 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
