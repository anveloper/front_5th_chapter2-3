import { PostWithAuthor } from "@/entities/post/models/post.types";
import { PostContext } from "@/entities/post/models/use-post-context";
import { ReactNode, useState } from "react";

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);

  return <PostContext.Provider value={{ posts, setPosts }}>{children}</PostContext.Provider>;
};
