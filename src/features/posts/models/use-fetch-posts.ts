import { fetchPostsAPI } from "@/entities/post/api/fetch-posts";
import { Post } from "@/entities/post/models/post.types";
import { fetchUsersAPI } from "@/entities/user/api/fetch-users";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useURLContext } from "../lib/use-url-context";
import { usePostContext } from "./use-post-context";

export const useFetchPosts = () => {
  const { limit, skip } = useURLContext();
  const { setLoading, setPosts, setTotal } = usePostContext();

  const { isFetching, refetch } = useQuery({
    queryKey: ["posts", limit, skip],
    queryFn: async () => {
      const [postsData, usersData] = await Promise.all([fetchPostsAPI(limit, skip), fetchUsersAPI()]);

      const posts: Post[] = postsData.posts.map((post) => {
        const author = usersData.users.find((user) => user.id === post.userId);
        if (!author) throw new Error("wrong author");
        return { ...post, author };
      });

      return { posts, total: postsData.total };
    },
    enabled: false,
  });

  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching, setLoading]);

  // 게시물 가져오기
  const fetchPosts = useCallback(async () => {
    try {
      const data = await refetch().then((res) => res.data);
      if (!data) throw new Error("데이터 없음");
      setPosts(data.posts);
      setTotal(data.total);
    } catch (error) {
      console.error("게시물 조회 오류", error);
    }
  }, [refetch, setPosts, setTotal]);

  return { fetchPosts };
};
