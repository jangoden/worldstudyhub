export function Pagination() {
    return (
        <div className="mt-16 flex items-center justify-center gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 hover:cursor-pointer" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-blue-500/30 hover:cursor-pointer">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary hover:text-primary hover:bg-white dark:hover:bg-slate-800 transition-all hover:cursor-pointer">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary hover:text-primary hover:bg-white dark:hover:bg-slate-800 transition-all hover:cursor-pointer">3</button>
            <span className="text-slate-400 px-2">...</span>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary hover:text-primary hover:bg-white dark:hover:bg-slate-800 transition-all hover:cursor-pointer">8</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all hover:cursor-pointer">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
        </div>
    );
}
