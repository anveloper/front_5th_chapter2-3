import { Comment, CommentsMap } from "@/entities/comment/models/comment.types";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

type CommentContextType = {
  comments: CommentsMap;
  setComments: Dispatch<SetStateAction<CommentsMap>>;
  selectedComment: Comment | null;
  setSelectedComment: Dispatch<SetStateAction<Comment | null>>;
};

export const CommentContext = createContext<CommentContextType | null>(null);

export const useCommentContext = () => {
  const context = useContext(CommentContext);
  if (!context) throw new Error("context is null");
  return context;
};
