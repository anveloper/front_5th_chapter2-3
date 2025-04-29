import { createContext, useContext } from "react";

type URLContextType = {
  skip: number;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
};
export const URLContext = createContext<URLContextType | null>(null);

export const useURLContext = () => {
  const context = useContext(URLContext);
  if (!context) throw new Error("context is null");
  return context;
};
