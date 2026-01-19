export function BlogContent({ children }: { children: React.ReactNode }) {
    return (
        <article className="max-w-none text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-8">
            {/* 
        This is a wrapper component that expects content with standard HTML tags 
        (h2, p, ul, blockquote, etc.) passed as children.
        In a real app, this might be a Markdown renderer.
        Here we rely on the parent to pass well-structured JSX.
      */}
            {/* 
        Using standard Tailwind Typography (prose) to automatically style the HTML content.
        This matches the editor's styling 1:1.
      */}
            <div className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10 prose-img:w-full
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-blue-50/50 dark:prose-blockquote:bg-slate-800/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            ">
                {children}
            </div>

            {/* Share Section included at the bottom of content */}
            <div className="pt-10 mt-12 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Share this article
                </h3>
                <div className="flex gap-2">
                    {/* Facebook */}
                    <button className="p-3 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all duration-300">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                    </button>

                    {/* Twitter / X */}
                    <button className="p-3 rounded-full bg-black/5 hover:bg-black dark:bg-white/10 dark:hover:bg-white text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-black transition-all duration-300">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" /></svg>
                    </button>

                    {/* LinkedIn */}
                    <button className="p-3 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white transition-all duration-300">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    </button>

                    {/* WhatsApp */}
                    <button className="p-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all duration-300">
                        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    );
}
