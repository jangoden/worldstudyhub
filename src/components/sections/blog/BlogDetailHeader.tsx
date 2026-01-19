import Link from "next/link";
import Image from "next/image";

interface BlogDetailHeaderProps {
  title: string;
  category: string;
  date: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  readTime: string;
  image: string;
}

export function BlogDetailHeader({
  title,
  category,
  date,
  author,
  readTime,
  image,
}: BlogDetailHeaderProps) {
  return (
    <div className="w-full">
      {/* Breadcrumb & Category */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 mb-6">
        <Link
          href="/blog"
          className="hover:text-primary transition-colors flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[18px]">
            arrow_back
          </span>
          Back to Blog
        </Link>
        <span className="text-slate-300">•</span>
        <span className="px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300">
          {category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
        {title}
      </h1>

      {/* Author & Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-10 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
          <div className="relative size-12 rounded-full overflow-hidden ring-2 ring-primary/20">
            <img
              src={author.image}
              alt={author.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-base">
              {author.name}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {author.role}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-accent">
              calendar_today
            </span>
            {date}
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-accent">
              schedule
            </span>
            {readTime}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] lg:aspect-[2/1] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none mb-12 lg:mb-16">
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />{" "}
        {/* Placeholder */}
        <img
          src={image}
          alt={title}
          className="relative w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
      </div>
    </div>
  );
}
