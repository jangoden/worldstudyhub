export function CategoryNav() {
    return (
        <section className="sticky top-[73px] z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-border-light dark:border-border-dark py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
                    <button className="px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold whitespace-nowrap shadow-md hover:cursor-pointer">All</button>
                    <button className="px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold whitespace-nowrap transition-colors hover:cursor-pointer">Tech Careers</button>
                    <button className="px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold whitespace-nowrap transition-colors hover:cursor-pointer">Study Tips</button>
                    <button className="px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold whitespace-nowrap transition-colors hover:cursor-pointer">FinTech</button>
                    <button className="px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold whitespace-nowrap transition-colors hover:cursor-pointer">Agriculture</button>
                    <button className="px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold whitespace-nowrap transition-colors hover:cursor-pointer">Soft Skills</button>
                    <button className="px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold whitespace-nowrap transition-colors hover:cursor-pointer">Success Stories</button>
                    <button className="px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold whitespace-nowrap transition-colors hover:cursor-pointer">Scholarships</button>
                </div>
            </div>
        </section>
    );
}
