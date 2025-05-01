import { Post } from "@/entities/post/models";
import { API_URL } from "@/shared/lib/api-path";

export const editPostAPI = async (editedPost: Post): Promise<Post> => {
  const response = await fetch(API_URL.POSTS_ID(editedPost.id), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedPost),
  });
  const data = await response.json();
  return data;
};
