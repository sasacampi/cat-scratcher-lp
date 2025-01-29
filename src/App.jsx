import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Header";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <MainContent />
      <Testimonials />
      <Footer />
    </Router>
  );
}

export default App;
