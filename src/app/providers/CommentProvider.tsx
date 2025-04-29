import { Comment, CommentsMap, NewComment } from "@/entities/comment/models/comment.types";
import { CommentContext } from "@/features/comments/models/use-comment-context";
import { ReactNode, useMemo, useState } from "react";

export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [comments, setComments] = useState<CommentsMap>({});
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [newComment, setNewComment] = useState<NewComment>({ body: "", postId: null, userId: 1 });

  const value = useMemo(
    () => ({
      comments,
      setComments,
      selectedComment,
      setSelectedComment,
      newComment,
      setNewComment,
    }),
    [comments, setComments, selectedComment, setSelectedComment, newComment, setNewComment],
  );
  return <CommentContext.Provider value={value}>{children}</CommentContext.Provider>;
};
