import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogHeader } from '@/components/sections/blog/BlogHeader';
import { CategoryNav } from '@/components/sections/blog/CategoryNav';
import { FeaturedArticle } from '@/components/sections/blog/FeaturedArticle';
import { ArticleGrid } from '@/components/sections/blog/ArticleGrid';
import { Pagination } from '@/components/sections/blog/Pagination';
import { Newsletter } from '@/components/sections/blog/Newsletter';

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full">
                <BlogHeader />
                <CategoryNav />
                <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
                    <FeaturedArticle />
                    <ArticleGrid />
                    <Pagination />
                </section>
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
}
