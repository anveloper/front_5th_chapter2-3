import { Comment, CommentsMap, NewComment } from "@/entities/comment/models/comment.types";
import { Post } from "@/entities/post/models/post.types";
import { CommentContext } from "@/features/comments/models/use-comment-context";
import { ReactNode, useState } from "react";

export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [comments, setComments] = useState<CommentsMap>({});
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [newComment, setNewComment] = useState<NewComment>({ body: "", postId: null, userId: 1 });

  // 댓글 가져오기
  const fetchComments = async (postId: Post["id"]) => {
    if (comments[postId]) return; // 이미 불러온 댓글이 있으면 다시 불러오지 않음
    try {
      const response = await fetch(`/api/comments/post/${postId}`);
      const data = await response.json();
      setComments((prev) => ({ ...prev, [postId]: data.comments }));
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
