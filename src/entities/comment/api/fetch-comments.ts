import { Post } from "@/entities/post/models";
import { API_URL } from "@/shared/lib/api-path";

export const fetchCommentsAPI = async (id: Post["id"]) => {
  const response = await fetch(API_URL.COMMENTS_POST_ID(id));
  const data = await response.json();
  return data;
};
