import { useURLContext } from "@/features/posts/lib/use-url-context";
import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { usePostContext } from "@/features/posts/models/use-post-context";
import { highlightText } from "@/shared/lib/highlight-text";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui";
import { CommentsList } from "@/widgets/comment/ui/CommentsList";

export const PostDetailDialog = () => {
  const { searchQuery } = useURLContext();
  const { selectedPost } = usePostContext();
  const { showPostDetailDialog, setShowPostDetailDialog } = useDialogContext();

  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title || "", searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body || "", searchQuery)}</p>
          <CommentsList />
        </div>
      </DialogContent>
    </Dialog>
  );
};
