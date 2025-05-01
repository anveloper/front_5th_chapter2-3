import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "@/shared/ui";
import { useCommentContext } from "../models/use-comment-context";
import { useEditComment } from "../models/use-edit-comment";

export const EditCommentDialog = () => {
  const { selectedComment, setSelectedComment } = useCommentContext();
  const { showEditCommentDialog, setShowEditCommentDialog } = useDialogContext();

  // 댓글 업데이트
  const { mutate: editComment } = useEditComment();
  const handleEditComment = async () => {
    if (!selectedComment) return;
    editComment({ ...selectedComment });
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
          <Button onClick={handleEditComment}>댓글 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
