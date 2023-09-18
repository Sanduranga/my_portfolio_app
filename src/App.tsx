import "./App.css";
import ContactMeSection from "./components/ContactMeSection";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/my_portfolio_app" element={<LandingSection />} />
        <Route path="contact_me_section" element={<ContactMeSection />} />
      </Routes>
    </div>
  );
}

export default App;
