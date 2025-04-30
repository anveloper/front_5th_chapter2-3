import { deletePostAPI } from "@/entities/post/api/delete-post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePostContext } from "./use-post-context";

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const { setPosts } = usePostContext();

  return useMutation({
    mutationFn: deletePostAPI,
    onSuccess: (_data, id) => {
      setPosts((prev) => prev.filter((post) => post.id !== id));
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.error("게시물 삭제 오류:", error);
    },
  });
};
