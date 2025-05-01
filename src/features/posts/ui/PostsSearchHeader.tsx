import { usePostContext } from "@/features/posts/models/use-post-context";
import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUpdateURL } from "../lib/use-update-url";
import { useURLContext } from "../lib/use-url-context";
import { useFetchPosts } from "../models/use-fetch-posts";
import { useFetchPostsByTag } from "../models/use-fetch-posts-by-tag";
import { useFetchTags } from "../models/use-fetch-tags";
import { useSearchPosts } from "../models/use-search-posts";

export const PostsSearchHeader = () => {
  const location = useLocation();
  const {
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
  } = useURLContext();
  const { tags } = usePostContext();

  const { fetchPosts } = useFetchPosts();
  const { fetchPostsByTag } = useFetchPostsByTag();
  const { fetchTags } = useFetchTags();
  const { searchPosts } = useSearchPosts();
  const { updateURL } = useUpdateURL();

  useEffect(() => {
    if (selectedTag) fetchPostsByTag();
    else fetchPosts();

    updateURL();
  }, [skip, limit, sortBy, sortOrder, selectedTag, updateURL, fetchPostsByTag, fetchPosts]);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSkip(parseInt(params.get("skip") || "0"));
    setLimit(parseInt(params.get("limit") || "10"));
    setSearchQuery(params.get("search") || "");
    setSortBy(params.get("sortBy") || "");
    setSortOrder(params.get("sortOrder") || "asc");
    setSelectedTag(params.get("tag") || "");
  }, [location.search, setLimit, setSearchQuery, setSelectedTag, setSkip, setSortBy, setSortOrder]);

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="게시물 검색..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && searchPosts()}
          />
        </div>
      </div>
      <Select
        value={selectedTag}
        onValueChange={(value) => {
          setSelectedTag(value);
          fetchPostsByTag();
          updateURL();
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="태그 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">모든 태그</SelectItem>
          {tags.map((tag, idx) => {
            return (
              <SelectItem key={idx} value={tag.slug}>
                {tag.slug}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="정렬 기준" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">없음</SelectItem>
          <SelectItem value="id">ID</SelectItem>
          <SelectItem value="title">제목</SelectItem>
          <SelectItem value="reactions">반응</SelectItem>
        </SelectContent>
      </Select>
      <Select value={sortOrder} onValueChange={setSortOrder}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="정렬 순서" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">오름차순</SelectItem>
          <SelectItem value="desc">내림차순</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
