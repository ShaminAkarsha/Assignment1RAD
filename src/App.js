import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CutomerSupport from "./pages/CustomerSupport";
import JobInfo from "./pages/JobForm";
import JobForm from "./pages/JobForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cust-support" element={<CutomerSupport />} />
          <Route path="/job-info" element={<JobInfo />} />
          <Route path="/job-form" element={<JobForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
