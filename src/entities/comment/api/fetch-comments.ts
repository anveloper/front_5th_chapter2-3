import { Post } from "@/entities/post/models";

export const fetchCommentsAPI = async (id: Post["id"]) => {
  const response = await fetch(`/api/comments/post/${id}`);
  const data = await response.json();
  return data;
};
