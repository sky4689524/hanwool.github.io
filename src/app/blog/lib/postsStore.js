import { getAllPosts } from "./getMarkdownPosts";

let cachedPosts = null;

export async function getCachedPosts() {
  if (!cachedPosts) {
    cachedPosts = await getAllPosts();
  }
  return cachedPosts;
}