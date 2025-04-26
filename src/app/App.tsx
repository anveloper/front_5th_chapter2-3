import PostsManagerPage from "../pages/PostsManagerPage.tsx";
import Footer from "../widgets/ui/Footer.tsx";
import Header from "../widgets/ui/Header.tsx";
import Providers from "./providers";
import "./styles/global.css";

const App = () => {
  return (
    <Providers>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <PostsManagerPage />
        </main>
        <Footer />
      </div>
    </Providers>
  );
};

export default App;
