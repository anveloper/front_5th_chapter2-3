import { deleteCommentAPI } from "@/entities/comment/api/delete-comment";
import { usePostContext } from "@/features/posts/models/use-post-context";
import { useMutation } from "@tanstack/react-query";
import { useCommentContext } from "./use-comment-context";

export const useDeleteComment = () => {
  const { selectedPost } = usePostContext();
  const { setComments } = useCommentContext();
  const postId = selectedPost?.id || 0;

  return useMutation({
    mutationFn: deleteCommentAPI,
    onSuccess: (_, id) => {
      setComments((prev) => ({
        ...prev,
        [postId]: prev[postId].filter((comment) => comment.id !== id),
      }));
    },
    onError: (error) => {
      console.error("댓글 삭제 오류:", error);
    },
  });
};
