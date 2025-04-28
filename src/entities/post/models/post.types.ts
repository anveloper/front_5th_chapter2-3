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

type PostsData = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};

type UsersData = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

export type { NewPost, Post, PostsData, Tag, UsersData };
