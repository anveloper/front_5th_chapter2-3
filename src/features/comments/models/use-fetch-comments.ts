import { fetchCommentsAPI } from "@/entities/comment/api/fetch-comments";
import { Post } from "@/entities/post/models/post.types";
import { useCallback } from "react";
import { useCommentContext } from "./use-comment-context";

export const useFetchComments = () => {
  const { comments, setComments } = useCommentContext();

  // 댓글 가져오기
  const fetchComments = useCallback(
    async (id: Post["id"]) => {
      if (comments[id]) return;
      try {
        const data = await fetchCommentsAPI(id);
        setComments((prev) => ({ ...prev, [id]: data.comments }));
      } catch (error) {
        console.error("댓글 가져오기 오류:", error);
      }
    },
    [comments, setComments],
  );

  return { fetchComments };
};
