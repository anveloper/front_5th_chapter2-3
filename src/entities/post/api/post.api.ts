import { NewPost, Post } from "../models";

export const addPost = async (newPost: NewPost): Promise<Post> => {
  const response = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) throw new Error("fail add post");
  return response.json();
};

export const editPost = async (editedPost: Post): Promise<Post> => {
  const response = await fetch(`/api/posts/${editedPost.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedPost),
  });
  if (!response.ok) throw new Error("fail edit post");
  return response.json();
};
