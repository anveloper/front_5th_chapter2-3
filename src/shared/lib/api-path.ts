import { Comment } from "@/entities/comment/models/comment.types";
import { Post } from "@/entities/post/models";
import { User } from "@/entities/user/models/user.types";

export const API_URL = {
  // posts
  POSTS: (limit: number, skip: number) => `/api/posts?limit=${limit}&skip=${skip}` as const,
  POSTS_ID: (id: Post["id"]) => `/api/posts/${id}` as const,
  POSTS_TAG: (tag: Post["tags"][number]) => `/api/posts/tag/${tag}` as const,
  POSTS_SEARCH: (query: string) => `/api/posts/search?q=${query}` as const,

  // comments
  COMMENTS_ID: (id: Comment["id"]) => `/api/comments/${id}` as const,
  COMMENTS_POST_ID: (id: Post["id"]) => `/api/comments/post/${id}` as const,

  // users
  USERS: "/api/users?limit=0&select=username,image",
  USERS_ID: (id: User["id"]) => `/api/users/${id}` as const,
} as const;
