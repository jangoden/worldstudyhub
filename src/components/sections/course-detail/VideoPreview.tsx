export function VideoPreview() {
    return (
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group aspect-video">
            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBu7C67W8a_AuO2dOZFRTLzfKUzlndhHkyPI_g6pSMFdb1wTuMbUrz74gCyRjTybEWQNppR6MhJ34crWMHzU6lZyfFpZ0KIHVVqkrIfFoOjk1GtWaona1iQbNyUzpcOsSn-vmtUCyxHHBYBwVLQPLBc95XdzoXCs1y7hzjRloJqkLvxnf4mXSSgJGYMLD-Dm3DhgmvB7Q7Nxi0AZQAcjWRsQ71cHHnKP84YRVCC3fnFkhjWPSJm_g24hBFwFjJfF9o6h5lkVbqYo9pU")' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="size-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-white/30 transition-all duration-300 group shadow-xl hover:cursor-pointer">
                    <span className="material-symbols-outlined text-5xl ml-1 fill-current">play_arrow</span>
                </button>
            </div>
            <div className="absolute bottom-4 right-4 z-10">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="material-symbols-outlined text-white text-lg">settings</span>
                    <span className="text-xs font-bold text-white uppercase">720p</span>
                    <span className="material-symbols-outlined text-white text-sm">expand_less</span>
                </div>
            </div>
            <div className="absolute bottom-4 left-4 z-10">
                <span className="text-xs font-bold text-white bg-primary px-2 py-1 rounded">PREVIEW</span>
            </div>
        </div>
    );
}
