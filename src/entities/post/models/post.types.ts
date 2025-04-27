type Reaction = {
  likes?: number;
  dislikes?: number;
};

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions?: Reaction;
  views: number;
  userId: number;
};

type NewPost = Omit<Post, "id" | "tags" | "reactions" | "views">;

export type { NewPost, Post };
