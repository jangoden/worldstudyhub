import Link from 'next/link';

interface CourseProps {
    title: string;
    description: string;
    category: string;
    categoryIcon: string;
    categoryColor: string;
    rating: string;
    reviews: string;
    price: string;
    image: string;
}

export function CourseCard({ title, description, category, categoryIcon, categoryColor, rating, reviews, price, image }: CourseProps) {
    return (
        <article className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
            <div className="relative aspect-[16/9] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${image}")` }}></div>
                <div className={`absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm ${categoryColor} text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm flex items-center gap-1`}>
                    <span className="material-symbols-outlined text-[14px]">{categoryIcon}</span>
                    {category}
                </div>
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white p-1.5 rounded-full hover:bg-black/70 cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">{description}</p>
                <div className="flex items-center gap-1.5 mb-6">
                    <span className="material-symbols-outlined text-yellow-400 text-lg fill-current">star</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{rating}</span>
                    <span className="text-sm text-slate-400">({reviews} reviews)</span>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-400 uppercase font-semibold">Price</p>
                        <p className="text-xl font-bold text-primary">{price}</p>
                    </div>
                    <Link href="/courses/agri-tech-poultry" className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:cursor-pointer">
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
