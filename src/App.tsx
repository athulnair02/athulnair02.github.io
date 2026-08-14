import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { ScrollToHash } from "./components/ScrollToHash";
import { Footer } from "./components/Contact";
import { HomePage } from "./pages/HomePage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <ScrollToHash />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
