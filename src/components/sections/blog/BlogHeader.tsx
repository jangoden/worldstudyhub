export function BlogHeader() {
    return (
        <section className="bg-surface-light dark:bg-surface-dark pt-12 pb-8 md:pt-20 md:pb-12 border-b border-border-light/50 dark:border-border-dark/50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    The <span className="text-primary">Learning Hub</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
                    Your ultimate resource for tech skills, career growth, and educational opportunities across Africa.
                </p>
                <div className="max-w-xl mx-auto relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">search</span>
                    <input className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary shadow-lg shadow-slate-200/50 dark:shadow-none transition-all placeholder:text-slate-400" placeholder="Search for articles, topics, or guides..." type="text" />
                </div>
            </div>
        </section>
    );
}
