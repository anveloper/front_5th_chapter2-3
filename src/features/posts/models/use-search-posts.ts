import { useCallback } from "react";
import { searchPostsAPI } from "../api/search-posts";
import { useFetchPosts } from "./use-fetch-posts";
import { usePostContext } from "./use-post-context";
import { useURLContext } from "./use-url-context";

export const useSearchPosts = () => {
  const { searchQuery } = useURLContext();
  const { setPosts, setTotal, setLoading } = usePostContext();
  const { fetchPosts } = useFetchPosts();

  // 게시물 검색
  const searchPosts = useCallback(async () => {
    if (!searchQuery) {
      fetchPosts();
      return;
    }
    setLoading(true);
    try {
      const data = await searchPostsAPI(searchQuery);
      setPosts(data.posts);
      setTotal(data.total);
    } catch (error) {
      console.error("게시물 검색 오류:", error);
    }
    setLoading(false);
  }, [fetchPosts, searchQuery, setLoading, setPosts, setTotal]);

  return { searchPosts };
};
