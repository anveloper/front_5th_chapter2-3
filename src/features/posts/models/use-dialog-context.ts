import { createContext, SetStateAction, useContext } from "react";

type DialogContextType = {
  showAddCommentDialog: boolean;
  setShowAddCommentDialog: React.Dispatch<SetStateAction<boolean>>;
  showEditCommentDialog: boolean;
  setShowEditCommentDialog: React.Dispatch<SetStateAction<boolean>>;
  showPostDetailDialog: boolean;
  setShowPostDetailDialog: React.Dispatch<SetStateAction<boolean>>;
  showUserModal: boolean;
  setShowUserModal: React.Dispatch<SetStateAction<boolean>>;
  showAddDialog: boolean;
  setShowAddDialog: React.Dispatch<SetStateAction<boolean>>;
  showEditDialog: boolean;
  setShowEditDialog: React.Dispatch<SetStateAction<boolean>>;
};
export const DialogContext = createContext<DialogContextType | null>(null);

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) throw new Error("context is null");
  return context;
};
