import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui";
import { editCommentAPI } from "../api/edit-comment";
import { useCommentContext } from "../models/use-comment-context";

export const EditCommentDialog = () => {
  const { setComments, selectedComment, setSelectedComment } = useCommentContext();
  const { showEditCommentDialog, setShowEditCommentDialog } = useDialogContext();

  // 댓글 업데이트
  const updateComment = async () => {
    try {
      if (!selectedComment) return;
      const data = await editCommentAPI(selectedComment.id, selectedComment.body);
      setComments((prev) => ({
        ...prev,
        [data.postId]: prev[data.postId].map((comment) => (comment.id === data.id ? data : comment)),
      }));
      setShowEditCommentDialog(false);
    } catch (error) {
      console.error("댓글 업데이트 오류:", error);
    }
  };

  return (
    <Dialog open={showEditCommentDialog} onOpenChange={setShowEditCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={selectedComment?.body || ""}
            onChange={(e) => setSelectedComment((prev) => (prev ? { ...prev, body: e.target.value } : null))}
          />
          <Button onClick={updateComment}>댓글 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
