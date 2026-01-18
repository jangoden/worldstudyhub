export function CoursesHeader() {
    return (
        <section className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore Our Course Catalog</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">Master in-demand skills tailored for the African market. Learn online or offline.</p>
                </div>
                <div className="max-w-2xl mx-auto relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                    </div>
                    <input className="block w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" placeholder="Search for courses (e.g. Poultry Farming, React, Marketing)..." type="text" />
                    <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-blue-600 text-white px-6 rounded-lg font-semibold transition-colors hover:cursor-pointer">
                        Search
                    </button>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    <button className="px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm shadow-md hover:scale-105 transition-transform hover:cursor-pointer">
                        All Courses
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:border-primary hover:text-primary dark:hover:text-primary hover:shadow-md transition-all hover:cursor-pointer">
                        Tech
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:shadow-md transition-all hover:cursor-pointer">
                        Agriculture
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-md transition-all hover:cursor-pointer">
                        Business
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 hover:shadow-md transition-all hover:cursor-pointer">
                        Language
                    </button>
                </div>
            </div>
        </section>
    );
}
