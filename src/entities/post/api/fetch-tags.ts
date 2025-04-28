export const fetchTagsAPI = async () => {
  const response = await fetch("/api/posts/tags");
  const data = await response.json();
  return data;
};
