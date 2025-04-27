import { AddCommentDialog } from "@/features/comments/ui/AddCommentDialog";
import { CommentsList } from "@/features/comments/ui/ConmmentsList";
import { EditCommentDialog } from "@/features/comments/ui/EditCommentDialog";
import { useDialogContext } from "@/features/posts/models/use-dialog-context";
import { usePostContext } from "@/features/posts/models/use-post-context";
import { AddPostDialog } from "@/features/posts/ui/AddPostDialog";
import { EditPostDialog } from "@/features/posts/ui/EditPostDialog";
import { PostDetailDialog } from "@/features/posts/ui/PostDetailDialog";
import { PostsPagination } from "@/features/posts/ui/PostsPagination";
import { PostsSearchHeader } from "@/features/posts/ui/PostsSearchHeader";
import { PostsTable } from "@/features/posts/ui/PostsTable";
import { useUserContext } from "@/features/users/models/use-user-context";
import { Plus } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../shared/ui";

const PostsManager = () => {
  // 상태 관리
  const { selectedPost } = usePostContext();

  const { showUserModal, setShowUserModal, setShowAddDialog } = useDialogContext();

  const { selectedUser } = useUserContext();

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>게시물 관리자</span>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="w-4 h-4 mr-2" />
            게시물 추가
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* 검색 및 필터 컨트롤 */}
          <PostsSearchHeader />
          {/* 게시물 테이블 */}
          <PostsTable />
          {/* 페이지네이션 */}
          <PostsPagination />
        </div>
      </CardContent>

      {/* 게시물 추가 대화상자 */}
      <AddPostDialog />

      {/* 게시물 수정 대화상자 */}
      <EditPostDialog />

      {/* 댓글 추가 대화상자 */}
      <AddCommentDialog />

      {/* 댓글 수정 대화상자 */}
      <EditCommentDialog />

      {/* 게시물 상세 보기 대화상자 */}
      <PostDetailDialog>
        <CommentsList postId={selectedPost?.id || 0} />
      </PostDetailDialog>

      {/* 사용자 모달 */}
      <Dialog open={showUserModal} onOpenChange={setShowUserModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>사용자 정보</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img src={selectedUser?.image} alt={selectedUser?.username} className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-center">{selectedUser?.username}</h3>
            <div className="space-y-2">
              <p>
                <strong>이름:</strong> {selectedUser?.firstName} {selectedUser?.lastName}
              </p>
              <p>
                <strong>나이:</strong> {selectedUser?.age}
              </p>
              <p>
                <strong>이메일:</strong> {selectedUser?.email}
              </p>
              <p>
                <strong>전화번호:</strong> {selectedUser?.phone}
              </p>
              <p>
                <strong>주소:</strong> {selectedUser?.address?.address}, {selectedUser?.address?.city},{" "}
                {selectedUser?.address?.state}
              </p>
              <p>
                <strong>직장:</strong> {selectedUser?.company?.name} - {selectedUser?.company?.title}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default PostsManager;
