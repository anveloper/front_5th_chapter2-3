import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { usePostContext } from "@/features/posts/models/use-post-context";
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui";
import { useState } from "react";
import { useAddComment } from "../models/use-add-comment";

export const AddCommentDialog = () => {
  const { selectedPost } = usePostContext();
  const { showAddCommentDialog, setShowAddCommentDialog } = useDialogContext();
  const [newComment, setNewComment] = useState({ body: "", postId: null, userId: 1 });

  // 댓글 추가
  const { mutate: addComment } = useAddComment();
  const handleAddComment = async () => {
    if (!selectedPost) return;
    const option = {
      onSuccess: () => {
        setNewComment({ body: "", postId: null, userId: 1 });
      },
    };
    addComment({ ...newComment, postId: selectedPost.id }, option);
  };

  return (
    <Dialog open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
          <Button onClick={handleAddComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
