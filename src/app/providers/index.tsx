import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const Providers = ({ children }: { children: ReactNode }) => {
  return <Router>{children}</Router>;
};

export { Providers };
