import { API_URL } from "@/shared/lib/api-path";
import { Post, PostsData, UsersData } from "../models";

export const fetchPostsAPI = async (limit: number, skip: number) => {
  const response = await fetch(API_URL.POSTS(limit, skip));
  const postsData = (await response.json()) as PostsData;

  const response2 = await fetch(API_URL.USERS);
  const usersData = (await response2.json()) as UsersData;

  const posts: Post[] = postsData.posts.map((post) => {
    const author = usersData.users.find((user) => user.id === post.userId);
    if (!author) throw new Error("wrong author");
    return { ...post, author };
  });

  return { posts, total: postsData.total };
};
