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
  author?: User;
};

type NewPost = Omit<Post, "id" | "tags" | "reactions" | "views">;

type Tag = {
  slug: string;
  url: string;
};

export type { NewPost, Post, Tag };
