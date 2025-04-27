import { User } from "@/entities/user/models/user.types";

type Reaction = {
  likes?: number;
  dislikes?: number;
};

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions?: Reaction;
  views: number;
  userId: number;
};

type NewPost = Omit<Post, "id" | "tags" | "reactions" | "views">;

type PostWithAuthor = Post & { author: User };

export type { NewPost, Post, PostWithAuthor };
