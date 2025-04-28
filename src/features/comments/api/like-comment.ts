import { Comment } from "@/entities/comment/models/comment.types";

export const likeCommentAPI = async (id: Comment["id"], likes: Comment["likes"]) => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ likes }),
  });
  const data = await response.json();
  return data;
};
