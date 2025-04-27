type Comment = {
  id: number;
  postId: number | null;
  body: string;
  likes: number;
  userId: number;
};
type NewComment = Omit<Comment, "id" | "user" | "likes">;

export type { Comment, NewComment };
