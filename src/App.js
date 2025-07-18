import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs"
import ContactUs from "./components/ContactUs/ContactUs"


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/rooms" element={<Rooms />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
