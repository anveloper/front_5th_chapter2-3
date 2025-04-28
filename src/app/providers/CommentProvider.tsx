import { fetchCommentsAPI } from "@/entities/comment/api/fetch-comments";
import { Comment, CommentsMap, NewComment } from "@/entities/comment/models/comment.types";
import { Post } from "@/entities/post/models/post.types";
import { CommentContext } from "@/features/comments/models/use-comment-context";
import { ReactNode, useState } from "react";

export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [comments, setComments] = useState<CommentsMap>({});
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [newComment, setNewComment] = useState<NewComment>({ body: "", postId: null, userId: 1 });

  // 댓글 가져오기
  const fetchComments = async (id: Post["id"]) => {
    if (comments[id]) return;
    try {
      const data = await fetchCommentsAPI(id);
      setComments((prev) => ({ ...prev, [id]: data.comments }));
    } catch (error) {
      console.error("댓글 가져오기 오류:", error);
    }
  };

  const value = {
    comments,
    setComments,
    selectedComment,
    setSelectedComment,
    newComment,
    setNewComment,
    fetchComments,
  };
  return <CommentContext.Provider value={value}>{children}</CommentContext.Provider>;
};
