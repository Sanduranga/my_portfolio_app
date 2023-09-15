import "./App.css";
import ContactMeSection from "./components/ContactMeSection";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectSection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <img
        src="./bg2.jpg"
        alt="Background"
        className="absolute top-0 left-0 object-cover max-h-1/2 w-full"
      />
      <Header />
      <Routes>
        <Route path="/my_portfolio_app" element={<LandingSection />} />
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
