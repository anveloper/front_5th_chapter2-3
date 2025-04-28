import { Post, PostsData, UsersData } from "../models";

export const fetchPostsByTagAPI = async (tag: Post["tags"][number]) => {
  const response = await fetch(`/api/posts/tag/${tag}`);
  const postsData = (await response.json()) as PostsData;

  const response2 = await fetch("/api/users?limit=0&select=username,image");
  const usersData = (await response2.json()) as UsersData;

  const posts: Post[] = postsData.posts.map((post) => {
    const author = usersData.users.find((user) => user.id === post.userId);
    if (!author) throw new Error("wrong author");
    return { ...post, author };
  });

  return { posts, total: postsData.total };
};
