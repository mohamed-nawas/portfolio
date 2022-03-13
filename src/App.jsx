import React from "react";
import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Detail />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
