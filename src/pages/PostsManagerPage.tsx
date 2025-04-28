import { PostsHeader } from "@/features/posts/ui/PostsHeader";
import { PostsPagination } from "@/features/posts/ui/PostsPagination";
import { PostsSearchHeader } from "@/features/posts/ui/PostsSearchHeader";
import { PostsTable } from "@/features/posts/ui/PostsTable";
import { PostsDialogs } from "@/widgets/posts/ui/PostsDialogs";
import { Card, CardContent, CardHeader } from "../shared/ui";

const PostsManager = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <PostsHeader />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <PostsSearchHeader />
          <PostsTable />
          <PostsPagination />
        </div>
      </CardContent>
      <PostsDialogs />
    </Card>
  );
};

export default PostsManager;
