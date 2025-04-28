import type { NewPost } from "@/entities/post/models";
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "@/shared/ui";
import { useState } from "react";
import { addPostAPI } from "../api/add-post";
import { useDialogContext } from "../models/use-dialog-context";
import { usePostContext } from "../models/use-post-context";

export const AddPostDialog = () => {
  const { setPosts } = usePostContext();
  const { showAddDialog, setShowAddDialog } = useDialogContext();
  const [newPost, setNewPost] = useState<NewPost>({ title: "", body: "", userId: 1 });

  // 게시물 추가
  const handleAddPost = async () => {
    try {
      const data = await addPostAPI(newPost);
      setPosts((prev) => [data, ...prev]);
      setShowAddDialog(false);
      setNewPost({ title: "", body: "", userId: 1 });
    } catch (error) {
      console.error("게시물 추가 오류:", error);
    }
  };

  return (
    <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Textarea
            rows={30}
            placeholder="내용"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={newPost.userId}
            onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
          />
          <Button onClick={handleAddPost}>게시물 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
