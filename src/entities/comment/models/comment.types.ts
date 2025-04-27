import { Post } from "@/entities/post/models/post.types";
import { User } from "@/entities/user/models/user.types";

type Comment = {
  id: number;
  postId: number | null;
  body: string;
  likes: number;
  userId: User["id"];
  user?: User;
};
type NewComment = Omit<Comment, "id" | "user" | "likes">;

type CommentsMap = { [key: Post["id"]]: Comment[] };

export type { Comment, CommentsMap, NewComment };
