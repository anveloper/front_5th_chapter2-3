import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "@/shared/ui";
import { useEffect, useState } from "react";
import { editPostAPI } from "../api/edit-post";
import { useDialogContext } from "../models/use-dialog-context";
import { usePostContext } from "../models/use-post-context";

export const EditPostDialog = () => {
  const { posts, setPosts, selectedPost } = usePostContext();
  const { showEditDialog, setShowEditDialog } = useDialogContext();
  const [editedPost, setEditedPost] = useState(selectedPost);

  useEffect(() => {
    setEditedPost(selectedPost);
  }, [selectedPost]);

  if (!editedPost) return null;

  // 게시물 업데이트
  const handleUpdatePost = async () => {
    try {
      const updated = await editPostAPI(editedPost);
      setPosts(posts.map((post) => (updated.id === post.id ? updated : post)));
      setShowEditDialog(false);
    } catch (error) {
      console.error("게시물 업데이트 실패:", error);
    }
  };

  return (
    <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={editedPost?.title || ""}
            onChange={(e) => setEditedPost((prev) => (prev ? { ...prev, title: e.target.value } : null))}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={editedPost?.body || ""}
            onChange={(e) => setEditedPost((prev) => (prev ? { ...prev, body: e.target.value } : null))}
          />
          <Button onClick={handleUpdatePost}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
