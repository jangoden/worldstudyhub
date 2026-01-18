export function AboutHero() {
    return (
        <section className="relative bg-slate-50 dark:bg-slate-900/50 pt-20 pb-32 lg:pt-32 lg:pb-48 text-center px-4 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] size-[600px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
                <div className="absolute top-[40%] -left-[10%] size-[500px] bg-orange-100/50 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 shadow-sm mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Mission</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                    Empowering Africa <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Through Education</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    We are building the infrastructure for the next generation of African leaders, ensuring that geography and connectivity are no longer barriers to world-class learning.
                </p>
            </div>
        </section>
    );
}
