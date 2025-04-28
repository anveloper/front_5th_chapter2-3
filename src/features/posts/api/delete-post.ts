import { Post } from "@/entities/post/models";
import { API_URL } from "@/shared/lib/api-path";

export const deletePostAPI = async (id: Post["id"]) => {
  await fetch(API_URL.POSTS_ID(id), { method: "DELETE" });
};
