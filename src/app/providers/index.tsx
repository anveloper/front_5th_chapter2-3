import { ReactNode } from "react";
import { CommentProvider } from "./CommentProvider";
import { DialogProvider } from "./DialogProvider";
import { PostProvider } from "./PostProvider";
import { URLProvider } from "./URLProvider";
import { UserProvider } from "./UserProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <URLProvider>
      <PostProvider>
        <CommentProvider>
          <UserProvider>
            <DialogProvider>{children}</DialogProvider>
          </UserProvider>
        </CommentProvider>
      </PostProvider>
    </URLProvider>
  );
};

export { Providers };
