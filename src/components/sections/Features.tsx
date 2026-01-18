export function Features() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Students Choose World Study Hub</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">We&apos;ve built a platform that understands the unique challenges of the African market, focusing on accessibility and quality.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
                    <div className="size-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl">wifi_tethering_off</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Zero-Data Learning Mode</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Engineered for low bandwidth. Save up to 80% on data costs with our smart compression tech that works smoothly even on 2G/3G networks.
                    </p>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
                    <div className="size-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-accent mb-6">
                        <span className="material-symbols-outlined text-3xl">payments</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Pan-African Payments</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        No credit card? No problem. Pay instantly via M-Pesa, MTN MoMo, Flutterwave, or USSD codes directly in your local currency.
                    </p>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
                    <div className="size-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                        <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Industry-Endorsed Skills</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Curriculum co-developed with leading African tech giants and startups. Gain practical skills that are actually in demand by top employers.
                    </p>
                </div>
            </div>
        </section>
    );
}
