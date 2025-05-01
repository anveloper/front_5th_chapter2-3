import { fetchPostsByTagAPI } from "@/entities/post/api/fetch-posts-by-tag";
import { Post } from "@/entities/post/models/post.types";
import { fetchUsersAPI } from "@/entities/user/api/fetch-users";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useURLContext } from "../lib/use-url-context";
import { useFetchPosts } from "./use-fetch-posts";
import { usePostContext } from "./use-post-context";

export const useFetchPostsByTag = () => {
  const { selectedTag } = useURLContext();
  const { setLoading, setPosts, setTotal } = usePostContext();
  const { fetchPosts } = useFetchPosts();

  const { isFetching, refetch } = useQuery({
    queryKey: ["posts", "byTag", selectedTag],
    queryFn: async () => {
      const [postsData, usersData] = await Promise.all([fetchPostsByTagAPI(selectedTag), fetchUsersAPI()]);

      const posts: Post[] = postsData.posts.map((post) => {
        const author = usersData.users.find((user) => user.id === post.userId);
        if (!author) throw new Error("wrong author");
        return { ...post, author };
      });

      return { posts, total: postsData.total };
    },
    enabled: false,
    staleTime: 1000 * 60,
  });

  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching, setLoading]);

  // 태그별 게시물 가져오기
  const fetchPostsByTag = useCallback(async () => {
    if (!selectedTag || selectedTag === "all") {
      fetchPosts();
      return;
    }

    try {
      const data = await refetch().then((res) => res.data);
      if (!data) throw new Error("데이터 없음");
      setPosts(data.posts);
      setTotal(data.total);
    } catch (error) {
      console.error("태그별 게시물 가져오기 오류:", error);
    }
  }, [selectedTag, fetchPosts, refetch, setPosts, setTotal]);

  return { fetchPostsByTag };
};
