import { User } from "@/entities/user/models/user.types";
import { UserContext } from "@/features/users/models/use-user-context";
import { ReactNode, useMemo, useState } from "react";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const value = useMemo(
    () => ({
      selectedUser,
      setSelectedUser,
    }),
    [selectedUser, setSelectedUser],
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
