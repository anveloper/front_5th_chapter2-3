import { NewPost, Post } from "@/entities/post/models";

export const addPostAPI = async (newPost: NewPost): Promise<Post> => {
  const response = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) throw new Error("fail add post");
  return response.json();
};
