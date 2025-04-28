import { Comment } from "@/entities/comment/models/comment.types";
import { API_URL } from "@/shared/lib/api-path";

export const deleteCommentAPI = async (id: Comment["id"]) => {
  await fetch(API_URL.COMMENTS_ID(id), { method: "DELETE" });
};
