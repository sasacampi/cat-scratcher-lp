import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import MainContent from "./MainContent";
import Unique from "./Unique";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      {location.pathname !== "/shop" && (
        <>
          <Hero />
          <MainContent />
          <Unique />
          <Testimonials />
          <Footer />
        </>
      )}

      <Outlet />
    </>
  );
};

export default Layout;
