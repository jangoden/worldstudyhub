import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { getBlogs } from "@/lib/api/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

export const dynamic = 'force-dynamic'; // Explicitly mark this page as dynamic

const Blog = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const blogData = await getBlogs(page);
  const blogs = blogData.data;
  const { current_page, last_page } = blogData.meta;

  const pageNumbers = [];
  for (let i = 1; i <= last_page; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogs.map((blog: any) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {last_page > 1 && (
            <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
              <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                  {current_page > 1 && (
                    <li className="mx-1">
                      <Link
                        href={`/blog?page=${current_page - 1}`}
                        className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                      >
                        Prev
                      </Link>
                    </li>
                  )}
                  {pageNumbers.map((page) => (
                    <li key={page} className="mx-1">
                      <Link
                        href={`/blog?page=${page}`}
                        className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                          current_page === page
                            ? "bg-primary text-white"
                            : "bg-body-color/15 text-body-color hover:bg-primary hover:text-white"
                        }`}
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                  {current_page < last_page && (
                    <li className="mx-1">
                      <Link
                        href={`/blog?page=${current_page + 1}`}
                        className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                      >
                        Next
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
