export function Curriculum() {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Curriculum</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">12 Sections • 48 Lectures • 12h 30m</span>
            </div>
            <div className="space-y-4">
                <div className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
                    <details className="group" open>
                        <summary className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                <h4 className="font-bold text-slate-900 dark:text-white">Section 1: Introduction to Modern Poultry</h4>
                            </div>
                            <span className="text-xs font-medium text-slate-500">3 lectures • 45m</span>
                        </summary>
                        <div className="p-2 bg-white dark:bg-surface-dark">
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 group/item transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">play_circle</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">The Business of Poultry in Africa</span>
                                        <span className="text-xs text-primary font-semibold">Preview</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-slate-400">15:00</span>
                                    <button className="text-slate-300 hover:text-primary transition-colors" title="Download for Offline Viewing">
                                        <span className="material-symbols-outlined text-xl">download</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 group/item transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-slate-400 text-xl">lock</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Selecting Your Niche: Layers vs. Broilers</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-slate-400">12:30</span>
                                    <button className="text-slate-300 hover:text-primary transition-colors" title="Download for Offline Viewing">
                                        <span className="material-symbols-outlined text-xl">download</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 group/item transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-slate-400 text-xl">lock</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Site Selection & housing Basics</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-slate-400">18:45</span>
                                    <button className="text-slate-300 hover:text-primary transition-colors" title="Download for Offline Viewing">
                                        <span className="material-symbols-outlined text-xl">download</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
                <div className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
                    <details className="group">
                        <summary className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                <h4 className="font-bold text-slate-900 dark:text-white">Section 2: Nutrition & Feeding</h4>
                            </div>
                            <span className="text-xs font-medium text-slate-500">5 lectures • 2h 15m</span>
                        </summary>
                        <div className="p-4 text-sm text-slate-500 text-center">
                            Content is locked. Purchase to unlock.
                        </div>
                    </details>
                </div>
                <div className="border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
                    <details className="group">
                        <summary className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                <h4 className="font-bold text-slate-900 dark:text-white">Section 3: Disease Management</h4>
                            </div>
                            <span className="text-xs font-medium text-slate-500">4 lectures • 1h 50m</span>
                        </summary>
                        <div className="p-4 text-sm text-slate-500 text-center">
                            Content is locked. Purchase to unlock.
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
}
