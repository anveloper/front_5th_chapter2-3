import { fetchPostsAPI } from "@/entities/post/api/fetch-posts";
import { fetchPostsByTagAPI } from "@/entities/post/api/fetch-posts-by-tag";
import { fetchTagsAPI } from "@/entities/post/api/fetch-tags";
import { Post, Tag } from "@/entities/post/models/post.types";
import { PostContext } from "@/features/posts/models/use-post-context";
import { useURLContext } from "@/features/posts/models/use-url-context";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const { limit, skip, sortBy, sortOrder, selectedTag, updateURL } = useURLContext();
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // search
  const [total, setTotal] = useState(0);

  // 게시물 가져오기
  const fetchSetPosts = useCallback(async () => {
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
  }, [limit, skip]);

  // 태그별 게시물 가져오기
  const fetchSetPostsByTag = useCallback(
    async (tag: Post["tags"][number]) => {
      if (!tag || tag === "all") {
        fetchSetPosts();
        return;
      }
      setLoading(true);
      try {
        const { posts, total } = await fetchPostsByTagAPI(tag);
        setPosts(posts);
        setTotal(total);
      } catch (error) {
        console.error("태그별 게시물 가져오기 오류:", error);
      } finally {
        setLoading(false);
      }
    },
    [fetchSetPosts],
  );

  useEffect(() => {
    if (selectedTag) {
      fetchSetPostsByTag(selectedTag);
    } else {
      fetchSetPosts();
    }
    updateURL();
  }, [skip, limit, sortBy, sortOrder, selectedTag, updateURL, fetchSetPostsByTag, fetchSetPosts]); // TODO 수정예정

  // tag
  const [tags, setTags] = useState<Tag[]>([]);

  // 태그 가져오기
  const fetchTags = useCallback(async () => {
    try {
      const data = await fetchTagsAPI();
      setTags(data);
    } catch (error) {
      console.error("태그 가져오기 오류:", error);
    }
  }, []);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

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
      fetchSetPosts,
      fetchSetPostsByTag,
    }),
    [
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
      fetchSetPostsByTag,
    ],
  );
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
