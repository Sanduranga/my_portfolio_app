import "./App.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/my_portfolio_app" element={<LandingSection />} />
      </Routes>
    </div>
  );
}

export default App;
