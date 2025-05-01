import { URLContext } from "@/features/posts/lib/use-url-context";
import { ReactNode, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export const URLProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // search
  const [skip, setSkip] = useState(parseInt(queryParams.get("skip") || "0"));
  const [limit, setLimit] = useState(parseInt(queryParams.get("limit") || "10"));
  const [searchQuery, setSearchQuery] = useState(queryParams.get("search") || "");

  // sort
  const [sortBy, setSortBy] = useState(queryParams.get("sortBy") || "");
  const [sortOrder, setSortOrder] = useState(queryParams.get("sortOrder") || "asc");

  // tag
  const [selectedTag, setSelectedTag] = useState(queryParams.get("tag") || "");

  const value = useMemo(
    () => ({
      skip,
      setSkip,
      limit,
      setLimit,
      searchQuery,
      setSearchQuery,
      sortBy,
      setSortBy,
      sortOrder,
      setSortOrder,
      selectedTag,
      setSelectedTag,
    }),
    [
      skip,
      setSkip,
      limit,
      setLimit,
      searchQuery,
      setSearchQuery,
      sortBy,
      setSortBy,
      sortOrder,
      setSortOrder,
      selectedTag,
      setSelectedTag,
    ],
  );
  return <URLContext.Provider value={value}>{children}</URLContext.Provider>;
};
