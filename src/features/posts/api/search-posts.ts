export const searchPostsAPI = async (searchQuery: string) => {
  const response = await fetch(`/api/posts/search?q=${searchQuery}`);
  const data = await response.json();
  return data;
};
