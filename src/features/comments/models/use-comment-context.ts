import { Comment, CommentsMap, NewComment } from "@/entities/comment/models/comment.types";
import { Post } from "@/entities/post/models/post.types";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

type CommentContextType = {
  comments: CommentsMap;
  setComments: Dispatch<SetStateAction<CommentsMap>>;
  selectedComment: Comment | null;
  setSelectedComment: Dispatch<SetStateAction<Comment | null>>;
  newComment: NewComment;
  setNewComment: Dispatch<SetStateAction<NewComment>>;
  fetchComments: (postId: Post["id"]) => Promise<void>;
};

export const CommentContext = createContext<CommentContextType | null>(null);

export const useCommentContext = () => {
  const context = useContext(CommentContext);
  if (!context) throw new Error("context is null");
  return context;
};
