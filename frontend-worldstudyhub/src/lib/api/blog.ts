const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function getBlogs(page: number = 1) {
  const response = await fetch(`${API_BASE_URL}/blog-posts?page=${page}`, { cache: 'no-store' });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText} - ${errorText}`);
  }
  return response.json();
}

export async function getBlogBySlug(slug: string) {
  const response = await fetch(`${API_BASE_URL}/blog-posts/${slug}`);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch blog with slug ${slug}: ${response.status} ${response.statusText} - ${errorText}`);
  }
  return response.json();
}
