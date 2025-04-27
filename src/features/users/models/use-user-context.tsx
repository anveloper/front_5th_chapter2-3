import { User } from "@/entities/user/models/user.types";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

type UserContextType = {
  selectedUser: User | null;
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("context is null");
  return context;
};
