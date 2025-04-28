import { fetchPostsAPI } from "@/entities/post/api/fetch-posts";
import { Post, Tag } from "@/entities/post/models/post.types";
import { User } from "@/entities/user/models/user.types";
import { PostContext } from "@/features/posts/models/use-post-context";
import { useURLContext } from "@/features/posts/models/use-url-context";
import { ReactNode, useEffect, useState } from "react";

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const { limit, skip, sortBy, sortOrder, selectedTag, updateURL } = useURLContext();
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // search
  const [total, setTotal] = useState(0);

  // 게시물 가져오기
  const fetchSetPosts = async () => {
    setLoading(true);
    try {
      const { posts, total } = await fetchPostsAPI(limit, skip);
      setPosts(posts);
      setTotal(total);
    } catch (error) {
      console.error("게시물 조회 오류", error);
    } finally {
      setLoading(false);
    }
  };

  // 태그별 게시물 가져오기
  const fetchPostsByTag = async (tag: Post["tags"][number]) => {
    if (!tag || tag === "all") {
      fetchSetPosts();
      return;
    }
    setLoading(true);
    try {
      const [postsResponse, usersResponse] = await Promise.all([
        fetch(`/api/posts/tag/${tag}`),
        fetch("/api/users?limit=0&select=username,image"),
      ]);
      const postsData = (await postsResponse.json()) as { posts: Post[]; total: number };
      const usersData = (await usersResponse.json()) as { users: User[] };

      const postsWithUsers: Post[] = postsData.posts.map((post) => {
        const author = usersData.users.find((user) => user.id === post.userId);
        if (!author) throw new Error("wrong author");
        return { ...post, author };
      });

      setPosts(postsWithUsers);
      setTotal(postsData.total);
    } catch (error) {
      console.error("태그별 게시물 가져오기 오류:", error);
    }
    setLoading(false);
  };

  // tag
  const [tags, setTags] = useState<Tag[]>([]);

  // 태그 가져오기
  const fetchTags = async () => {
    try {
      const response = await fetch("/api/posts/tags");
      const data = await response.json();
      setTags(data);
    } catch (error) {
      console.error("태그 가져오기 오류:", error);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    if (selectedTag) {
      fetchPostsByTag(selectedTag);
    } else {
      fetchSetPosts();
    }
    updateURL();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, limit, sortBy, sortOrder, selectedTag]); // TODO 수정예정

  const value = {
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
    fetchSetPosts,
    fetchPostsByTag,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
