import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogDetailHeader } from "@/components/sections/blog/BlogDetailHeader";
import { BlogContent } from "@/components/sections/blog/BlogContent";
import { BlogSidebar } from "@/components/sections/blog/BlogSidebar";
import { Newsletter } from "@/components/sections/blog/Newsletter";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { createClient as createStaticClient } from '@supabase/supabase-js'

export async function generateStaticParams() {
    const supabase = createStaticClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: posts } = await supabase.from('posts').select('slug').eq('is_published', true);
    return posts?.map(({ slug }) => ({ slug })) || [];
}

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

    if (!post) {
        notFound();
    }

    // Estimate read time
    const wordCount = post.content?.split(/\s+/).length || 0;
    const readTime = `${Math.ceil(wordCount / 200)} min read`;

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
            <Navbar />

            <main className="flex-grow w-full pt-28 pb-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Main Content Column */}
                        <div className="lg:w-[65%]">
                            <BlogDetailHeader
                                title={post.title}
                                category={post.category || 'General'}
                                date={format(new Date(post.created_at), 'MMM dd, yyyy')}
                                author={{
                                    name: "Admin", // TODO: Fetch real author profile if needed
                                    role: "Author",
                                    image: "https://ui-avatars.com/api/?name=Admin&background=random"
                                }}
                                readTime={readTime}
                                image={post.image_url || 'https://via.placeholder.com/1200x600?text=No+Image'}
                            />
                            <BlogContent>
                                <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                            </BlogContent>
                        </div>

                        {/* Sidebar Column */}
                        <div className="lg:w-[35%]">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </main>

            <Newsletter />
            <Footer />
        </div>
    );
}
