import { Post, Tag } from "@/entities/post/models/post.types";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

type PostContextType = {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
  selectedPost: Post | null;
  setSelectedPost: React.Dispatch<React.SetStateAction<Post | null>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
};

export const PostContext = createContext<PostContextType | null>(null);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("context is null");
  return context;
};
