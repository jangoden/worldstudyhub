export function CtaSection() {
    return (
        <section className="mx-4 md:mx-6 lg:mx-8 mb-16">
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-16 opacity-10">
                    <span className="material-symbols-outlined text-9xl text-white rotate-12">rocket_launch</span>
                </div>
                <div className="absolute bottom-0 left-0 p-16 opacity-10">
                    <span className="material-symbols-outlined text-9xl text-white -rotate-12">mail</span>
                </div>
                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Ready to start your journey?</h2>
                    <p className="text-blue-100 text-lg">Join our waiting list for exclusive course discounts and early access to new features.</p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mt-8">
                        <input
                            className="flex-1 px-5 py-3.5 rounded-lg border-0 focus:ring-2 focus:ring-accent text-slate-900 placeholder-slate-500 shadow-xl bg-white"
                            placeholder="Enter your email address"
                            required
                            type="email"
                        />
                        <button className="px-8 py-3.5 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg shadow-xl transition-all hover:scale-105 hover:cursor-pointer" type="button">
                            Join Waitlist
                        </button>
                    </form>
                    <p className="text-xs text-blue-300/60 mt-4">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
        </section>
    );
}
