export function MobileBottomBar() {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] safe-area-bottom">
            <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">₦ 15,000</span>
                    <span className="text-xs text-slate-500 line-through">₦ 25,000</span>
                </div>
                <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-500/30 flex-1 hover:cursor-pointer">
                    Buy Now
                </button>
            </div>
        </div>
    );
}
