export function CourseSidebar() {
    return (
        <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none">
                <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-end gap-3 mb-2">
                        <span className="text-4xl font-extrabold text-primary">₦ 15,000</span>
                        <span className="text-lg text-slate-400 line-through mb-1 font-medium">₦ 25,000</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">40% OFF</span>
                        <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">alarm</span>
                            Offer ends in 2 days
                        </span>
                    </div>
                </div>
                <div className="space-y-3 mb-8">
                    <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 hover:cursor-pointer">
                        Buy Now
                    </button>
                    <button className="w-full bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white border-2 border-slate-200 dark:border-slate-700 font-bold text-lg py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 hover:cursor-pointer">
                        Add to Cart
                    </button>
                </div>
                <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">This course includes:</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                            <span className="material-symbols-outlined text-primary text-[20px]">ondemand_video</span>
                            <span>12.5 hours on-demand video</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                            <span className="material-symbols-outlined text-primary text-[20px]">download_for_offline</span>
                            <span>Full Offline Access (App)</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                            <span className="material-symbols-outlined text-primary text-[20px]">article</span>
                            <span>15 Downloadable resources</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                            <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                            <span>Certificate of Completion</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                            <span className="material-symbols-outlined text-primary text-[20px]">all_inclusive</span>
                            <span>Full Lifetime Access</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-xs text-center text-slate-400 mb-3 font-medium">Secure Payment via</p>
                    <div className="flex items-center justify-center gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <div className="h-8 px-2 flex items-center font-bold text-slate-700 dark:text-white italic tracking-tighter">
                            <span className="text-yellow-500">Flutter</span>wave
                        </div>
                        <div className="h-6 w-px bg-slate-300 dark:bg-slate-700"></div>
                        <div className="h-8 px-2 flex items-center font-bold text-slate-700 dark:text-white tracking-tight">
                            M-PESA
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-5">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Training for a Team?</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Get this course for your cooperative or business team at a discounted rate.</p>
                <a className="text-primary text-sm font-bold hover:underline" href="#">Request Enterprise Access →</a>
            </div>
        </div>
    );
}
