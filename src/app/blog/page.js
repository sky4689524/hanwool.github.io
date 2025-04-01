import { getAllPosts } from "./lib/getMarkdownPosts";
import BlogListClient from "./BlogListClient";


export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogListClient posts={posts} />;
}
