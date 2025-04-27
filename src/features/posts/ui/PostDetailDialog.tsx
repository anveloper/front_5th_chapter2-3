import { highlightText } from "@/shared/lib/highlight-test";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui";
import { ReactNode } from "react";
import { useDialogContext } from "../models/use-dialog-context";
import { usePostContext } from "../models/use-post-context";

export const PostDetailDialog = ({ children: commentListNode }: { children: ReactNode }) => {
  const { searchQuery, selectedPost } = usePostContext();
  const { showPostDetailDialog, setShowPostDetailDialog } = useDialogContext();

  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title || "", searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body || "", searchQuery)}</p>
          <>{commentListNode}</>
        </div>
      </DialogContent>
    </Dialog>
  );
};
