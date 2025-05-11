import Layout from '../components/Layout';
import { getPosts } from '../../lib/posts';
import type { Post } from '../../lib/posts';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Layout>
      <div className="h-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: Post) => (
            <article 
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {post.date?.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "America/New_York",
                  })}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  <a 
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#084c41] transition-colors duration-300"
                  >
                    {post.data.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.data.description}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-[#084c41] font-medium hover:text-[#063a32] transition-colors duration-300"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
