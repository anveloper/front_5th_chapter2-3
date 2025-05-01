import { Comment } from "@/entities/comment/models/comment.types";
import { useURLContext } from "@/features/posts/lib/use-url-context";
import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { highlightText } from "@/shared/lib/highlight-text";
import { Button } from "@/shared/ui";
import { Edit2, ThumbsUp, Trash2 } from "lucide-react";
import { useCommentContext } from "../models/use-comment-context";
import { useDeleteComment } from "../models/use-delete-comment";
import { useLikeComment } from "../models/use-like-comment";

type CommentItemProps = {
  comment: Comment;
};

export const CommentItem = ({ comment }: CommentItemProps) => {
  const { searchQuery } = useURLContext();
  const { setSelectedComment } = useCommentContext();
  const { setShowEditCommentDialog } = useDialogContext();

  const { mutate: deleteComment } = useDeleteComment();
  const { mutate: likeComment } = useLikeComment();

  if (!comment.user) return null;
  return (
    <div className="flex items-center justify-between text-sm border-b pb-1">
      <div className="flex items-center space-x-2 overflow-hidden">
        <span className="font-medium truncate">{comment.user.username}:</span>
        <span className="truncate">{highlightText(comment.body, searchQuery)}</span>
      </div>
      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="sm" onClick={() => likeComment(comment.id)}>
          <ThumbsUp className="w-3 h-3" />
          <span className="ml-1 text-xs">{comment.likes}</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setSelectedComment(comment);
            setShowEditCommentDialog(true);
          }}
        >
          <Edit2 className="w-3 h-3" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => deleteComment(comment.id)}>
          <Trash2 className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};
