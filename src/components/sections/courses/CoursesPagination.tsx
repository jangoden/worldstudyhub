export function CoursesPagination() {
    return (
        <div className="mt-16 flex flex-col items-center gap-4 mb-20">
            <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer" disabled>
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                    Previous
                </button>
                <div className="hidden sm:flex items-center gap-1">
                    <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-blue-500/20 hover:cursor-pointer">1</button>
                    <button className="size-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 hover:cursor-pointer">2</button>
                    <button className="size-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 hover:cursor-pointer">3</button>
                    <span className="px-2 text-slate-400">...</span>
                    <button className="size-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 hover:cursor-pointer">12</button>
                </div>
                <button className="flex items-center gap-1 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary transition-colors hover:cursor-pointer">
                    Next
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
            </div>
            <p className="sm:hidden text-sm text-slate-500">Page 1 of 12</p>
        </div>
    );
}
