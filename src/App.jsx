import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route 
          path="/" element={<Home/>}
          />
          <Route 
          path="/About" element={<About/>}
          />
          <Route 
          path="/Services" element={<Services/>}
          />
          <Route 
          path="/Pricing" element={<Pricing/>}
          />
          <Route 
          path="/Contact" element={<Contact/>}
          />
        </Routes>
        <Footer/>
    </>
  );
};

export default App;
