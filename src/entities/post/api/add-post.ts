import { NewPost, Post } from "@/entities/post/models";
import { API_URL } from "@/shared/lib/api-path";

export const addPostAPI = async (newPost: NewPost): Promise<Post> => {
  const response = await fetch(API_URL.POSTS_ADD, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  const data = await response.json();
  return data;
};
