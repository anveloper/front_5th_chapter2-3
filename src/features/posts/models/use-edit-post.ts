import { editPostAPI } from "@/entities/post/api/edit-post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePostContext } from "../models/use-post-context";

export const useEditPost = () => {
  const queryClient = useQueryClient();
  const { setPosts, posts } = usePostContext();

  return useMutation({
    mutationFn: editPostAPI,
    onSuccess: (updatedPost) => {
      setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.error("게시물 업데이트 실패:", error);
    },
  });
};
