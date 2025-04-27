import { DialogContext } from "@/features/posts/models/use-dialog-context";
import { ReactNode, useState } from "react";

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [showAddCommentDialog, setShowAddCommentDialog] = useState(false);
  const [showEditCommentDialog, setShowEditCommentDialog] = useState(false);
  const [showPostDetailDialog, setShowPostDetailDialog] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);

  const value = {
    showAddCommentDialog,
    setShowAddCommentDialog,
    showEditCommentDialog,
    setShowEditCommentDialog,
    showPostDetailDialog,
    setShowPostDetailDialog,
    showUserModal,
    setShowUserModal,
    showAddDialog,
    setShowAddDialog,
    showEditDialog,
    setShowEditDialog,
  };
  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
};
