import Link from "next/link";

type Category = {
    id: string;
    name: string;
    slug: string;
};

interface CategoryNavProps {
    categories: Category[];
    activeCategory?: string;
}

export function CategoryNav({ categories, activeCategory }: CategoryNavProps) {
    return (
        <section className="sticky top-[73px] z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-border-light dark:border-border-dark py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
                    <Link
                        href="/blog"
                        className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors hover:cursor-pointer ${!activeCategory
                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                    >
                        All
                    </Link>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/blog?category=${category.id}`}
                            className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors hover:cursor-pointer ${activeCategory === category.id
                                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
