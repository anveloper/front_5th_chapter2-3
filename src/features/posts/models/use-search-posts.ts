import { searchPostsAPI } from "@/entities/post/api/search-posts";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useURLContext } from "../lib/use-url-context";
import { useFetchPosts } from "./use-fetch-posts";
import { usePostContext } from "./use-post-context";

export const useSearchPosts = () => {
  const { searchQuery } = useURLContext();
  const { setPosts, setTotal, setLoading } = usePostContext();
  const { fetchPosts } = useFetchPosts();

  const { refetch } = useQuery({
    queryKey: ["posts", "search", searchQuery],
    queryFn: () => searchPostsAPI(searchQuery),
    enabled: false,
  });

  // 게시물 검색
  const searchPosts = useCallback(async () => {
    if (!searchQuery) {
      fetchPosts();
      return;
    }
    setLoading(true);
    try {
      const data = await refetch().then((res) => res.data);
      setPosts(data.posts);
      setTotal(data.total);
    } catch (error) {
      console.error("게시물 검색 오류:", error);
    }
    setLoading(false);
  }, [fetchPosts, refetch, searchQuery, setLoading, setPosts, setTotal]);

  return { searchPosts };
};
