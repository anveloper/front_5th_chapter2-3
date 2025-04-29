import { usePostContext } from "@/features/posts/models/use-post-context";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/shared/ui";
import { PostsTableRow } from "./PostsTableRow";

export const PostsTable = () => {
  const { loading, posts } = usePostContext();

  if (loading) return <div className="flex justify-center p-4">로딩 중...</div>;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead className="w-[150px]">작성자</TableHead>
          <TableHead className="w-[150px]">반응</TableHead>
          <TableHead className="w-[150px]">작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post, key) => (
          <PostsTableRow key={key} post={post} />
        ))}
      </TableBody>
    </Table>
  );
};
