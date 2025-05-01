import { addPostAPI } from "@/entities/post/api/add-post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePostContext } from "./use-post-context";

export const useAddPost = () => {
  const queryClient = useQueryClient();
  const { setPosts, setTotal } = usePostContext();

  return useMutation({
    mutationFn: addPostAPI,
    onSuccess: (newPost) => {
      setPosts((prev) => [newPost, ...prev]);
      setTotal((prev) => prev + 1);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.error("게시물 추가 오류:", error);
    },
  });
};
