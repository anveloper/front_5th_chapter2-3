import { API_URL } from "@/shared/lib/api-path";
import { PostsData } from "../models";

export const fetchPostsAPI = async (limit: number, skip: number) => {
  const response = await fetch(API_URL.POSTS(limit, skip));
  const data = (await response.json()) as PostsData;
  return data;
};
