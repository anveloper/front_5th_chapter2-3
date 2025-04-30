import { API_URL } from "@/shared/lib/api-path";

export const searchPostsAPI = async (searchQuery: string) => {
  const response = await fetch(API_URL.POSTS_SEARCH(searchQuery));
  const data = await response.json();
  return data;
};
