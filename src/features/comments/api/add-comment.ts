import { NewComment } from "@/entities/comment/models/comment.types";

export const addCommentAPI = async (newComment: NewComment) => {
  const response = await fetch("/api/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  });
  const data = await response.json();
  return data;
};
