export function AboutStats() {
    return (
        <section className="relative z-20 px-4 md:px-6 lg:px-8 -mt-24 mb-20">
            <div className="max-w-6xl mx-auto bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-700 gap-8 md:gap-0">
                    <div className="text-center px-4 py-4 md:py-0">
                        <div className="inline-flex items-center justify-center size-12 bg-blue-50 dark:bg-blue-900/30 rounded-full text-primary mb-4">
                            <span className="material-symbols-outlined">groups</span>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">50k+</h3>
                        <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm">Students</p>
                    </div>
                    <div className="text-center px-4 py-4 md:py-0">
                        <div className="inline-flex items-center justify-center size-12 bg-orange-50 dark:bg-orange-900/30 rounded-full text-accent mb-4">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">120+</h3>
                        <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm">Expert Mentors</p>
                    </div>
                    <div className="text-center px-4 py-4 md:py-0">
                        <div className="inline-flex items-center justify-center size-12 bg-green-50 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-500 mb-4">
                            <span className="material-symbols-outlined">public</span>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">15</h3>
                        <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm">African Countries</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
