import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { CommentProvider } from "./CommentProvider";
import { DialogProvider } from "./DialogProvider";
import { PostProvider } from "./PostProvider";
import { URLProvider } from "./URLProvider";
import { UserProvider } from "./UserProvider";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <URLProvider>
        <PostProvider>
          <CommentProvider>
            <UserProvider>
              <DialogProvider>{children}</DialogProvider>
            </UserProvider>
          </CommentProvider>
        </PostProvider>
      </URLProvider>
    </QueryClientProvider>
  );
};

export { Providers };
