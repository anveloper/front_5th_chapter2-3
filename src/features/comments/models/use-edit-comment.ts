import { editCommentAPI } from "@/entities/comment/api/edit-comment";
import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { useMutation } from "@tanstack/react-query";
import { useCommentContext } from "./use-comment-context";

export const useEditComment = () => {
  const { setComments } = useCommentContext();
  const { setShowEditCommentDialog } = useDialogContext();

  return useMutation({
    mutationFn: editCommentAPI,
    onSuccess: (data) => {
      setComments((prev) => ({
        ...prev,
        [data.postId]: prev[data.postId].map((comment) => (comment.id === data.id ? data : comment)),
      }));
      setShowEditCommentDialog(false);
    },
    onError: (error) => {
      console.error("댓글 업데이트 오류:", error);
    },
  });
};
