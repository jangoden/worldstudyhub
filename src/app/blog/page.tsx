import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogHeader } from '@/components/sections/blog/BlogHeader';
import { CategoryNav } from '@/components/sections/blog/CategoryNav';
import { FeaturedArticle } from '@/components/sections/blog/FeaturedArticle';
import { ArticleGrid } from '@/components/sections/blog/ArticleGrid';
import { Pagination } from '@/components/sections/blog/Pagination';
import { Newsletter } from '@/components/sections/blog/Newsletter';


import { createClient } from '@/lib/supabase/server';

export const revalidate = 60 // optional: ISR revalidation

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>
}) {
    const supabase = await createClient()
    const { category } = await searchParams

    // Fetch Categories
    const { data: categories } = await supabase
        .from('categories')
        .select('*')
        .order('name');

    // Build Post Query
    let query = supabase
        .from('posts')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })

    if (category) {
        query = query.eq('category_id', category)
    }

    // Fetch Posts
    const { data: posts } = await query

    const allPosts = posts || []
    const featuredPost = allPosts[0]
    const otherPosts = allPosts.slice(1)

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full">
                <BlogHeader />
                <CategoryNav categories={categories || []} activeCategory={category} />
                <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
                    <FeaturedArticle post={featuredPost} />
                    <ArticleGrid posts={otherPosts} />
                    <Pagination />
                </section>
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
}
