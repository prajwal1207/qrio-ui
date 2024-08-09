import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import PortfolioPage from "../pages/portfolio";
import ServicesPage from "../pages/services";
import BlogPage from "../pages/blog";
import ContactPage from "../pages/contact";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Shared layout with nested routes */}
        <Route path="/qrio-ui" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="services" element={<ServicesPage />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
