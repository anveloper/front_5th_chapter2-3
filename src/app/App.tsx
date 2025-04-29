import PostsManagerPage from "@/pages/PostsManager.tsx";
import Footer from "@/widgets/common/ui/Footer.tsx";
import Header from "@/widgets/common/ui/Header.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Providers } from "./providers";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Providers>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <PostsManagerPage />
          </main>
          <Footer />
        </div>
      </Providers>
    </Router>
  );
};

export default App;
