import "./App.css";
import ContactMeSection from "./components/ContactMeSection";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectSection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative h-screen bg-black">
      <Header />

      <Routes>
        <Route path="/" element={<LandingSection />} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<ProjectSection />} />
      </Routes>
      <Routes>
        <Route path="/contact_me_section" element={<ContactMeSection />} />
      </Routes>
    </div>
  );
}

export default App;
