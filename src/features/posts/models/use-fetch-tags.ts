import { fetchTagsAPI } from "@/entities/post/api/fetch-tags";
import { useCallback } from "react";
import { usePostContext } from "./use-post-context";

export const useFetchTags = () => {
  const { setTags } = usePostContext();

  // 태그 가져오기
  const fetchTags = useCallback(async () => {
    try {
      const data = await fetchTagsAPI();
      setTags(data);
    } catch (error) {
      console.error("태그 가져오기 오류:", error);
    }
  }, [setTags]);

  return { fetchTags };
};
