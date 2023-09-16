import "./App.css";
import ContactMeSection from "./components/ContactMeSection";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative max-h-screen bg-black">
      <Header />
      <Routes>
        <Route path="/my_portfolio_app" element={<LandingSection />} />
      </Routes>
      <Routes>
        <Route path="/contact_me_section" element={<ContactMeSection />} />
      </Routes>
    </div>
  );
}

export default App;
