import { ReactNode } from "react";
import { CommentProvider } from "./CommentProvider";
import { DialogProvider } from "./DialogProvider";
import { PostProvider } from "./PostProvider";
import { UserProvider } from "./UserProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <PostProvider>
      <CommentProvider>
        <UserProvider>
          <DialogProvider>{children}</DialogProvider>
        </UserProvider>
      </CommentProvider>
    </PostProvider>
  );
};

export { Providers };
