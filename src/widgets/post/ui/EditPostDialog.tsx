import { PostWithAuthor } from "@/entities/post/models";
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "@/shared/ui";
import { useState } from "react";

type EditPostDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  post: PostWithAuthor | null;
  onUpdate: (updatedPost: PostWithAuthor) => void;
};

export const EditPostDialog = ({ open, onOpenChange, post, onUpdate }: EditPostDialogProps) => {
  const [editedPost, setEditedPost] = useState(post);

  const handleUpdatePost = async () => {
    if (!editedPost) return;
    try {
      const response = await fetch(`/api/posts/${editedPost.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedPost),
      });
      const updated = await response.json();
      onUpdate(updated); // 부모에 수정된 post 전달
      onOpenChange(false);
    } catch (error) {
      console.error("게시물 업데이트 실패:", error);
    }
  };

  if (!editedPost) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
