import { AddCommentDialog } from "@/features/comments/ui/AddCommentDialog";
import { EditCommentDialog } from "@/features/comments/ui/EditCommentDialog";
import { AddPostDialog } from "@/features/posts/ui/AddPostDialog";
import { EditPostDialog } from "@/features/posts/ui/EditPostDialog";
import { UserModal } from "@/features/users/ui/UserModal";
import { PostDetailDialog } from "@/widgets/posts/ui/PostDetailDialog";

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
