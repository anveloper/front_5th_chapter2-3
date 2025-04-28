import { AddCommentDialog } from "@/features/comments/ui/AddCommentDialog";
import { EditCommentDialog } from "@/features/comments/ui/EditCommentDialog";
import { AddPostDialog } from "@/features/posts/ui/AddPostDialog";
import { EditPostDialog } from "@/features/posts/ui/EditPostDialog";
import { PostDetailDialog } from "@/features/posts/ui/PostDetailDialog";
import { UserModal } from "@/features/users/ui/UserModal";

export const PostsDialogs = () => {
  return (
    <>
      <AddPostDialog />
      <EditPostDialog />
      <AddCommentDialog />
      <EditCommentDialog />
      <PostDetailDialog />
      <UserModal />
    </>
  );
};
