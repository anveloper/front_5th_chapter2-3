import { Comment } from "@/entities/comment/models/comment.types";
import { API_URL } from "@/shared/lib/api-path";

export const likeCommentAPI = async (id: Comment["id"], likes: Comment["likes"]) => {
  const response = await fetch(API_URL.COMMENTS_ID(id), {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ likes }),
  });
  const data = await response.json();
  return data;
};
