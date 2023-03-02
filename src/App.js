import "./styles/main.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";
import { Project } from "./pages/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
