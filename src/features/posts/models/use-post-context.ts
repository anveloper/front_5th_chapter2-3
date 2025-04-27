import { Post, Tag } from "@/entities/post/models/post.types";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

type PostContextType = {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
  selectedPost: Post | null;
  setSelectedPost: React.Dispatch<React.SetStateAction<Post | null>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  skip: number;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
  fetchPosts: () => void;
  fetchPostsByTag: (tag: Post["tags"][number]) => Promise<void>;
  updateURL: () => void;
  deletePost: (id: Post["id"]) => Promise<void>;
};

export const PostContext = createContext<PostContextType | null>(null);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("context is null");
  return context;
};
