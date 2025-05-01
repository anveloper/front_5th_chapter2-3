import { Comment, CommentsMap } from "@/entities/comment/models/comment.types";
import { CommentContext } from "@/features/comments/models/use-comment-context";
import { ReactNode, useMemo, useState } from "react";

export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [comments, setComments] = useState<CommentsMap>({});
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  const value = useMemo(
    () => ({
      comments,
      setComments,
      selectedComment,
      setSelectedComment,
    }),
    [comments, selectedComment],
  );
  return <CommentContext.Provider value={value}>{children}</CommentContext.Provider>;
};
