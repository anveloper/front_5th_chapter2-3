import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { usePostContext } from "@/features/posts/models/use-post-context";
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui";
import { useState } from "react";
import { addCommentAPI } from "../api/add-comment";
import { useCommentContext } from "../models/use-comment-context";

export const AddCommentDialog = () => {
  const { selectedPost } = usePostContext();
  const { setComments } = useCommentContext();
  const { showAddCommentDialog, setShowAddCommentDialog } = useDialogContext();
  const [newComment, setNewComment] = useState({ body: "", postId: null, userId: 1 });

  // 댓글 추가
  const addComment = async () => {
    try {
      if (!selectedPost) return;
      const data = await addCommentAPI({ ...newComment, postId: selectedPost.id });
      setComments((prev) => ({
        ...prev,
        [data.postId]: [...(prev[data.postId] || []), data],
      }));
      setShowAddCommentDialog(false);
      setNewComment({ body: "", postId: null, userId: 1 });
    } catch (error) {
      console.error("댓글 추가 오류:", error);
    }
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
          <Button onClick={addComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
