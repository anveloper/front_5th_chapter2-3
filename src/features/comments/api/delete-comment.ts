import { Comment } from "@/entities/comment/models/comment.types";

export const deleteCommentAPI = async (id: Comment["id"]) => {
  await fetch(`/api/comments/${id}`, { method: "DELETE" });
};
