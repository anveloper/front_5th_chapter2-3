import { fetchPostsAPI } from "@/entities/post/api/fetch-posts";
import { useCallback } from "react";
import { usePostContext } from "./use-post-context";
import { useURLContext } from "./use-url-context";

export const useFetchPosts = () => {
  const { limit, skip } = useURLContext();
  const { setLoading, setPosts, setTotal } = usePostContext();

  // 게시물 가져오기
  const fetchPosts = useCallback(async () => {
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
  }, [setLoading, setPosts, setTotal, limit, skip]);

  return { fetchPosts };
};
