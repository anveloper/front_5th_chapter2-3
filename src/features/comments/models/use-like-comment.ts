import { likeCommentAPI } from "@/entities/comment/api/like-comment";
import { Comment } from "@/entities/comment/models/comment.types";
import { usePostContext } from "@/features/posts/models/use-post-context";
import { useMutation } from "@tanstack/react-query";
import { useCommentContext } from "./use-comment-context";

export const useLikeComment = () => {
  const { selectedPost } = usePostContext();
  const { comments, setComments } = useCommentContext();
  const postId = selectedPost?.id || 0;
  const selectedComments = comments[postId] || [];

  return useMutation({
    mutationFn: async (id: Comment["id"]) => {
      const target = selectedComments.find((c) => c.id === id);
      if (!target) throw new Error("wrong comment id");
      return await likeCommentAPI(id, target.likes + 1);
    },
    onSuccess: (data) => {
      setComments((prev) => ({
        ...prev,
        [postId]: prev[postId].map((comment) =>
          comment.id === data.id ? { ...data, likes: comment.likes + 1 } : comment,
        ),
      }));
    },
    onError: (error) => {
      console.error("댓글 좋아요 오류:", error);
    },
  });
};
