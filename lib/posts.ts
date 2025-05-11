import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type Post = {
  data: {
    title?: string;
    author?: string;
    description?: string;
  };
  slug?: string;
  date?: Date;
  content: string;
};

const fileNameToSlug = (fileName: string): string => {
  return fileName.replace(/\.md$/, "");
};

export const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const matterData = matter(fileContent);
    const date = new Date(matterData.data.date || 0);
    // Fix timezone issue
    date.setDate(date.getDate() + 1);

    return {
        ...matterData,
        date,
        slug: fileNameToSlug(fileName),
    };
  });
  return posts.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
}; 

export const getPostSlugs = (): string[] => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileNameToSlug);
};

export const getPostBySlug = (slug: string): Post | undefined => {
  const posts = getPosts();
  return posts.find((post) => post.slug === slug);
};

