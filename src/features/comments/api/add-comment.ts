import { NewComment } from "@/entities/comment/models/comment.types";
import { API_URL } from "@/shared/lib/api-path";

export const addCommentAPI = async (newComment: NewComment) => {
  const response = await fetch(API_URL.COMMENTS_ADD, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  });
  const data = await response.json();
  return data;
};
