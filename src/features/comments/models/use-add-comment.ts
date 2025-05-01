import { addCommentAPI } from "@/entities/comment/api/add-comment";
import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { useMutation } from "@tanstack/react-query";
import { useCommentContext } from "./use-comment-context";

export const useAddComment = () => {
  const { setComments } = useCommentContext();
  const { setShowAddCommentDialog } = useDialogContext();

  return useMutation({
    mutationFn: addCommentAPI,
    onSuccess: (data) => {
      setComments((prev) => ({
        ...prev,
        [data.postId]: [...(prev[data.postId] || []), data],
      }));
      setShowAddCommentDialog(false);
    },
    onError: (error) => {
      console.error("댓글 추가 오류:", error);
    },
  });
};
