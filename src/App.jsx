import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./components/Shop";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/testimonials" element={<Testimonials />} />
        </Route>

        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
