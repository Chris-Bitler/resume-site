import Layout from "../../components/Layout";
import { getPostSlugs, getPostBySlug } from "../../../lib/posts";
import { notFound } from "next/navigation";

type BlogPostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const post = getPostBySlug((await params).slug);
  if (!post) {
    notFound();
  }

  const { date, content } = post;
  const { title, author } = post.data;

  return (
    <Layout>
      <div className="h-full p-8">
        <article className="max-w-3xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>

            <div className="text-gray-500">
              {date?.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "America/New_York",
              })}
            </div>

            {author && <div className="text-gray-600 mt-2">By {author}</div>}
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap">{content}</div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
