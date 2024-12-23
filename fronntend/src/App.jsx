import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import About from "./components/About";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage  />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
