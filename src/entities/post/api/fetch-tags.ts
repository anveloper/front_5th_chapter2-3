import { API_URL } from "@/shared/lib/api-path";

export const fetchTagsAPI = async () => {
  const response = await fetch(API_URL.POSTS_TAGS);
  const data = await response.json();
  return data;
};
