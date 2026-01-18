export function WhatYouWillLearn() {
    return (
        <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">What you{`'`}ll learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="size-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm font-bold">check</span>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Master sustainable feeding strategies to reduce costs by 30%</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="size-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm font-bold">check</span>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Implement effective disease prevention &amp; vaccination schedules</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="size-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm font-bold">check</span>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Advanced brooding management for lower mortality rates</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="size-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm font-bold">check</span>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Build market linkages and sales channels for your produce</span>
                </div>
            </div>
        </div>
    );
}
