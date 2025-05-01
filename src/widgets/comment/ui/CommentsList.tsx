import { useCommentContext } from "@/features/comments/models/use-comment-context";
import { CommentItem } from "@/features/comments/ui/CommentItem";
import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { usePostContext } from "@/features/posts/models/use-post-context";
import { Button } from "@/shared/ui";
import { Plus } from "lucide-react";

export const CommentsList = () => {
  const { selectedPost } = usePostContext();
  const { comments } = useCommentContext();
  const { setShowAddCommentDialog } = useDialogContext();

  const postId = selectedPost?.id || 0;
  const selectedComments = comments[postId] || [];

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <Button size="sm" onClick={() => setShowAddCommentDialog(true)}>
          <Plus className="w-3 h-3 mr-1" />
          댓글 추가
        </Button>
      </div>
      <div className="space-y-1">
        {selectedComments.map((comment, key) => (
          <CommentItem key={key} comment={comment} />
        ))}
      </div>
    </div>
  );
};
