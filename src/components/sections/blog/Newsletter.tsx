export function Newsletter() {
    return (
        <section className="w-full bg-blue-50 dark:bg-slate-900/50 py-20 border-y border-blue-100 dark:border-slate-800">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-white dark:bg-slate-800 text-primary shadow-lg shadow-blue-500/10 mb-6">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Join 15,000+ students</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                    Get the latest study tips, scholarship alerts, and career guides delivered weekly to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input className="flex-1 px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white placeholder-slate-400 shadow-sm outline-none" placeholder="Enter your email address" required type="email" />
                    <button className="px-6 py-3.5 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:cursor-pointer" type="button">
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-slate-400 mt-4">No spam, unsubscribe anytime.</p>
            </div>
        </section>
    );
}
