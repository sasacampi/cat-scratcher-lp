import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./components/Shop";
import Testimonials from "./components/Testimonials";
import ProductMockPage from "./components/ProductMockPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/testimonials" element={<Testimonials />} />
        </Route>
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductMockPage />} />
      </Routes>
    </Router>
  );
}

export default App;
