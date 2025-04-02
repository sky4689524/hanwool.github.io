import { getCachedPosts } from "./lib/postsStore";
import BlogListClient from "./BlogListClient";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getCachedPosts();
  return <BlogListClient posts={posts} />;
}
