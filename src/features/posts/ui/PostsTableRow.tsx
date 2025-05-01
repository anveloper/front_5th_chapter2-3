import { Post } from "@/entities/post/models";
import { useFetchComments } from "@/features/comments/models/use-fetch-comments";
import { useFetchUser } from "@/features/users/models/use-fatch-user";
import { highlightText } from "@/shared/lib/highlight-text";
import { Button, TableCell, TableRow } from "@/shared/ui";
import { Edit2, MessageSquare, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react";
import { useUpdateURL } from "../lib/use-update-url";
import { useURLContext } from "../lib/use-url-context";
import { useDeletePost } from "../models/use-delete-post";
import { useDialogContext } from "../models/use-dialog-context";
import { usePostContext } from "../models/use-post-context";

type PostsTableRowProps = {
  post: Post;
};

export const PostsTableRow = ({ post }: PostsTableRowProps) => {
  const { searchQuery, selectedTag, setSelectedTag } = useURLContext();
  const { setSelectedPost } = usePostContext();
  const { setShowEditDialog, setShowPostDetailDialog } = useDialogContext();

  const { mutate: deletePost } = useDeletePost();

  const { fetchComments } = useFetchComments();
  const { updateURL } = useUpdateURL();

  // 게시물 상세 보기
  const openPostDetail = (post: Post) => {
    setSelectedPost(post);
    fetchComments(post.id);
    setShowPostDetailDialog(true);
  };

  // 작성자 상세 모달
  const { mutate: fetchUser } = useFetchUser();
  const handleUserModal = (author?: Post["author"]) => {
    if (!author) return;
    fetchUser(author.id);
  };

  // 게시물 삭제
  const handleDeletePost = (id: Post["id"]) => {
    deletePost(id);
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
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleUserModal(post.author)}>
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
          <Button variant="ghost" size="sm" onClick={() => handleDeletePost(post.id)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
