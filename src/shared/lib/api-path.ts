import { Comment } from "@/entities/comment/models/comment.types";
import { Post } from "@/entities/post/models";
import { User } from "@/entities/user/models/user.types";

// SEGMENTS
const _API = "api";
const _POSTS = "posts";
const _COMMENTS = "comments";
const _USERS = "users";
const _TAG = "tag";
const _TAGS = "tags";
const _SEARCH = "search";
const _POST = "post";

// URL
export const API_URL = {
  // posts
  POSTS: (limit: number, skip: number) => `/${_API}/${_POSTS}?limit=${limit}&skip=${skip}` as const,
  POSTS_ID: (id: Post["id"]) => `/${_API}/${_POSTS}/${id}` as const,
  POSTS_TAG: (tag: Post["tags"][number]) => `/${_API}/${_POSTS}/${_TAG}/${tag}` as const,
  POSTS_TAGS: `/${_API}/${_POSTS}/${_TAGS}`,
  POSTS_SEARCH: (query: string) => `/${_API}/${_POSTS}/${_SEARCH}?q=${query}` as const,

  // comments
  COMMENTS_ID: (id: Comment["id"]) => `/${_API}/${_COMMENTS}/${id}` as const,
  COMMENTS_POST_ID: (id: Post["id"]) => `/${_API}/${_COMMENTS}/${_POST}/${id}` as const,

  // users
  USERS: `/${_API}/${_USERS}?limit=0&select=username,image`,
  USERS_ID: (id: User["id"]) => `/${_API}/${_USERS}/${id}` as const,
} as const;
