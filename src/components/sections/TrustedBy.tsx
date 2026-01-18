export function TrustedBy() {
    return (
        <section className="border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 py-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by leading institutions across Africa</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined">apartment</span> Ministry of Edu
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined">school</span> UNILAG
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined">language</span> ALX Africa
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined">signal_cellular_alt</span> Safaricom
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined">payments</span> Flutterwave
                    </div>
                </div>
            </div>
        </section>
    );
}
