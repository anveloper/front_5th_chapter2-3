import { fetchUserAPI } from "@/entities/user/api/fetch-user";
import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { useMutation } from "@tanstack/react-query";
import { useUserContext } from "./use-user-context";

export const useFetchUser = () => {
  const { setSelectedUser } = useUserContext();
  const { setShowUserModal } = useDialogContext();

  return useMutation({
    mutationFn: fetchUserAPI,
    onSuccess: (data) => {
      setSelectedUser(data);
      setShowUserModal(true);
    },
    onError: (error) => {
      console.error("사용자 정보 가져오기 오류:", error);
    },
  });
};
