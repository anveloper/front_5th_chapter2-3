import { Post } from "@/entities/post/models";

export const deletePostAPI = async (id: Post["id"]) => {
  await fetch(`/api/posts/${id}`, { method: "DELETE" });
};
