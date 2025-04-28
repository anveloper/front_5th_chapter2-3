import { Comment } from "@/entities/comment/models/comment.types";

export const editCommentAPI = async (id: Comment["id"], body: Comment["body"]) => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  });
  const data = await response.json();
  return data;
};
