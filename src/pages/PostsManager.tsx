import { PostsSearchHeader } from "@/features/posts/ui/PostsSearchHeader";
import { PostsDialogs } from "@/widgets/posts/ui/PostsDialogs";
import { PostsHeader } from "@/widgets/posts/ui/PostsHeader";
import { PostsPagination } from "@/widgets/posts/ui/PostsPagination";
import { PostsTable } from "@/widgets/posts/ui/PostsTable";
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
