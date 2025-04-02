import path from "path";
import fs from "fs/promises";

const postsMetaPath = path.join(
  process.cwd(),
  "src/app/blog/posts/postsMeta.json"
);

export async function getAllPosts() {
  const file = await fs.readFile(postsMetaPath, "utf-8");
  const posts = JSON.parse(file);

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
