import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { PostProvider } from "./PostProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Router>
      <PostProvider>{children}</PostProvider>
    </Router>
  );
};

export { Providers };
