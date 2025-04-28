import { Post } from "@/entities/post/models";
import { User } from "@/entities/user/models/user.types";
import { useCommentContext } from "@/features/comments/models/use-comment-context";
import { useUserContext } from "@/features/users/models/use-user-context";
import { highlightText } from "@/shared/lib/highlight-test";
import { Button, TableCell, TableRow } from "@/shared/ui";
import { Edit2, MessageSquare, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react";
import { deletePostAPI } from "../api/delete-post";
import { useDialogContext } from "../models/use-dialog-context";
import { usePostContext } from "../models/use-post-context";
import { useURLContext } from "../models/use-url-context";

type PostsTableRowProps = {
  post: Post;
};

export const PostsTableRow = ({ post }: PostsTableRowProps) => {
  const { searchQuery, selectedTag, setSelectedTag, updateURL } = useURLContext();
  const { setSelectedPost, setPosts } = usePostContext();
  const { setShowEditDialog, setShowPostDetailDialog, setShowUserModal } = useDialogContext();
  const { fetchComments } = useCommentContext();
  const { setSelectedUser } = useUserContext();

  // 게시물 상세 보기
  const openPostDetail = (post: Post) => {
    setSelectedPost(post);
    fetchComments(post.id);
    setShowPostDetailDialog(true);
  };

  // 사용자 모달 열기
  const openUserModal = async (user?: User) => {
    if (!user) return;
    try {
      const response = await fetch(`/api/users/${user.id}`);
      const userData = await response.json();
      setSelectedUser(userData);
      setShowUserModal(true);
    } catch (error) {
      console.error("사용자 정보 가져오기 오류:", error);
    }
  };

  // 게시물 삭제
  const deletePost = async (id: Post["id"]) => {
    try {
      await deletePostAPI(id);
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (error) {
      console.error("게시물 삭제 오류:", error);
    }
  };

  return (
    <TableRow key={post.id}>
      <TableCell>{post.id}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div>{highlightText(post.title, searchQuery)}</div>

          <div className="flex flex-wrap gap-1">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
                  selectedTag === tag
                    ? "text-white bg-blue-500 hover:bg-blue-600"
                    : "text-blue-800 bg-blue-100 hover:bg-blue-200"
                }`}
                onClick={() => {
                  setSelectedTag(tag);
                  updateURL();
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => openUserModal(post.author)}>
          <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
          <span>{post.author?.username}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <ThumbsUp className="w-4 h-4" />
          <span>{post.reactions?.likes || 0}</span>
          <ThumbsDown className="w-4 h-4" />
          <span>{post.reactions?.dislikes || 0}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => openPostDetail(post)}>
            <MessageSquare className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedPost(post);
              setShowEditDialog(true);
            }}
          >
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => deletePost(post.id)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
