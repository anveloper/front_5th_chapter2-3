import { AddCommentDialog } from "@/features/comments/ui/AddCommentDialog";
import { EditCommentDialog } from "@/features/comments/ui/EditCommentDialog";
import { AddPostDialog } from "@/features/posts/ui/AddPostDialog";
import { EditPostDialog } from "@/features/posts/ui/EditPostDialog";
import { PostDetailDialog } from "@/features/posts/ui/PostDetailDialog";
import { PostsHeader } from "@/features/posts/ui/PostsHeader";
import { PostsPagination } from "@/features/posts/ui/PostsPagination";
import { PostsSearchHeader } from "@/features/posts/ui/PostsSearchHeader";
import { PostsTable } from "@/features/posts/ui/PostsTable";
import { UserModal } from "@/features/users/ui/UserModal";
import { Card, CardContent, CardHeader } from "../shared/ui";

const PostsManager = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <PostsHeader />
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
      <PostDetailDialog />

      {/* 사용자 모달 */}
      <UserModal />
    </Card>
  );
};

export default PostsManager;
