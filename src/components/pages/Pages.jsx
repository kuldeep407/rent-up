import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/home/Home";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Services from "../services/Services";
import Blog from "../blog/Blog";
import Prices from "../prices/Prices";
import Contact from "../contact/Contact";

export default function Page() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
