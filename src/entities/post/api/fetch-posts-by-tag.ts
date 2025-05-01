import { API_URL } from "@/shared/lib/api-path";
import { Post, PostsData } from "../models";

export const fetchPostsByTagAPI = async (tag: Post["tags"][number]) => {
  const response = await fetch(API_URL.POSTS_TAG(tag));
  const data = (await response.json()) as PostsData;
  return data;
};
