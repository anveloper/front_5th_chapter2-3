import { Post, Tag } from "@/entities/post/models/post.types";
import { PostContext } from "@/features/posts/models/use-post-context";
import { ReactNode, useMemo, useState } from "react";

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [total, setTotal] = useState(0);

  const [tags, setTags] = useState<Tag[]>([]);

  const value = useMemo(
    () => ({
      posts,
      setPosts,
      selectedPost,
      setSelectedPost,
      total,
      setTotal,
      tags,
      setTags,
      loading,
      setLoading,
    }),
    [posts, setPosts, selectedPost, setSelectedPost, total, setTotal, tags, setTags, loading, setLoading],
  );
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
