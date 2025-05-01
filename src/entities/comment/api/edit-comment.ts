import { Comment } from "@/entities/comment/models/comment.types";
import { API_URL } from "@/shared/lib/api-path";

export const editCommentAPI = async ({ id, body }: { id: Comment["id"]; body: Comment["body"] }) => {
  const response = await fetch(API_URL.COMMENTS_ID(id), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  });
  const data = await response.json();
  return data;
};
