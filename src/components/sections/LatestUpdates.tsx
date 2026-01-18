export function LatestUpdates() {
    const updates = [
        {
            date: "October 12, 2024",
            title: "Top 10 High-Paying Skills in Nigeria for 2025",
            desc: "Discover the most sought-after digital skills that employers are looking for right now.",
            category: "Career",
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            date: "October 08, 2024",
            title: "How to Learn Effectively with Limited Internet",
            desc: "Tips and tricks for maximizing your offline study sessions using the World Study Hub app.",
            category: "Guide",
            gradient: "from-orange-400 to-red-500"
        },
        {
            date: "September 25, 2024",
            title: "From Novice to Pro: Amina's Coding Journey",
            desc: "Read how one student leveraged our scholarships to launch a tech career in Lagos.",
            category: "Success Story",
            gradient: "from-emerald-400 to-green-600"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Latest Updates & Career Tips</h2>
                <p className="text-slate-600 dark:text-slate-400">Stay ahead with insights on market trends and skill development.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {updates.map((item, idx) => (
                    <a key={idx} href="#" className="group block">
                        <div className="rounded-xl overflow-hidden mb-4 bg-white dark:bg-slate-800 aspect-video relative shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:scale-105 transition-transform duration-500`}></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <span className="bg-black/30 backdrop-blur px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">{item.category}</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm text-slate-500">{item.date}</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{item.desc}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
