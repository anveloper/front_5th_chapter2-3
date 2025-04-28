import { Post } from "@/entities/post/models";

export const editPostAPI = async (editedPost: Post): Promise<Post> => {
  const response = await fetch(`/api/posts/${editedPost.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedPost),
  });
  if (!response.ok) throw new Error("fail edit post");
  return response.json();
};
