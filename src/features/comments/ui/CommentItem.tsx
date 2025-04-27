import { Comment } from "@/entities/comment/models/comment.types";
import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { usePostContext } from "@/features/posts/models/use-post-context";
import { highlightText } from "@/shared/lib/highlight-test";
import { Button } from "@/shared/ui";
import { Edit2, ThumbsUp, Trash2 } from "lucide-react";
import { useCommentContext } from "../models/use-comment-context";

type CommentItemProps = {
  comment: Comment;
  likeComment: (id: Comment["id"]) => Promise<void>;
  deleteComment: (id: Comment["id"]) => Promise<void>;
};

export const CommentItem = ({ comment, likeComment, deleteComment }: CommentItemProps) => {
  const { searchQuery } = usePostContext();
  const { setSelectedComment } = useCommentContext();
  const { setShowEditCommentDialog } = useDialogContext();

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
