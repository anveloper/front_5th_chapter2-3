import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useURLContext } from "./use-url-context";

export const useUpdateURL = () => {
  const navigate = useNavigate();
  const { skip, limit, searchQuery, sortBy, sortOrder, selectedTag } = useURLContext();

  const updateURL = useCallback(() => {
    const params = new URLSearchParams();
    if (skip) params.set("skip", skip.toString());
    if (limit) params.set("limit", limit.toString());
    if (searchQuery) params.set("search", searchQuery);
    if (sortBy) params.set("sortBy", sortBy);
    if (sortOrder) params.set("sortOrder", sortOrder);
    if (selectedTag) params.set("tag", selectedTag);
    navigate(`?${params.toString()}`);
  }, [limit, navigate, searchQuery, selectedTag, skip, sortBy, sortOrder]);

  return { updateURL };
};
