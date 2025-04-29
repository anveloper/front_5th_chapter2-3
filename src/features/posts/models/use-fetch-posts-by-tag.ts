import { fetchPostsByTagAPI } from "@/entities/post/api/fetch-posts-by-tag";
import { Post } from "@/entities/post/models/post.types";
import { useCallback } from "react";
import { useFetchPosts } from "./use-fetch-posts";
import { usePostContext } from "./use-post-context";

export const useFetchPostsByTag = () => {
  const { setLoading, setPosts, setTotal } = usePostContext();
  const { fetchPosts } = useFetchPosts();

  // 태그별 게시물 가져오기
  const fetchPostsByTag = useCallback(
    async (tag: Post["tags"][number]) => {
      if (!tag || tag === "all") {
        fetchPosts();
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
    [fetchPosts, setLoading, setPosts, setTotal],
  );

  return { fetchPostsByTag };
};
