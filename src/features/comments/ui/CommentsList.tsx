import { Comment } from "@/entities/comment/models/comment.types";
import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { usePostContext } from "@/features/posts/models/use-post-context";
import { Button } from "@/shared/ui";
import { Plus } from "lucide-react";
import { deleteCommentAPI } from "../api/delete-comment";
import { likeCommentAPI } from "../api/like-comment";
import { useCommentContext } from "../models/use-comment-context";
import { CommentItem } from "./CommentItem";

export const CommentsList = () => {
  const { selectedPost } = usePostContext();
  const { comments, setComments, setNewComment } = useCommentContext();
  const { setShowAddCommentDialog } = useDialogContext();
  const postId = selectedPost?.id || 0;

  // 댓글 삭제
  const deleteComment = async (id: Comment["id"]) => {
    try {
      await deleteCommentAPI(id);
      setComments((prev) => ({
        ...prev,
        [postId]: prev[postId].filter((comment) => comment.id !== id),
      }));
    } catch (error) {
      console.error("댓글 삭제 오류:", error);
    }
  };

  // 댓글 좋아요
  const likeComment = async (id: Comment["id"]) => {
    try {
      const targetComment = comments[postId].find((c) => c.id === id);
      if (!targetComment) return;

      const data = await likeCommentAPI(id, targetComment.likes + 1);
      setComments((prev) => ({
        ...prev,
        [postId]: prev[postId].map((comment) =>
          comment.id === data.id ? { ...data, likes: comment.likes + 1 } : comment,
        ),
      }));
    } catch (error) {
      console.error("댓글 좋아요 오류:", error);
    }
  };

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <Button
          size="sm"
          onClick={() => {
            setNewComment((prev) => ({ ...prev, postId }));
            setShowAddCommentDialog(true);
          }}
        >
          <Plus className="w-3 h-3 mr-1" />
          댓글 추가
        </Button>
      </div>
      <div className="space-y-1">
        {comments[postId]?.map((comment) => (
          <CommentItem comment={comment} deleteComment={deleteComment} likeComment={likeComment} />
        ))}
      </div>
    </div>
  );
};
