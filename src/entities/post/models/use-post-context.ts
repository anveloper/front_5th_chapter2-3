import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { PostWithAuthor } from "./post.types";

type PostContextType = {
  posts: PostWithAuthor[];
  setPosts: Dispatch<SetStateAction<PostWithAuthor[]>>;
};
export const PostContext = createContext<PostContextType | null>(null);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("context is null");
  return context;
};
