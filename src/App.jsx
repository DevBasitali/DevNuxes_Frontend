import React from "react";
import '../src/App.css'
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Industries from "./Pages/Industries";
import SportsFitness from "./Pages/SportsFitness";
import EducationTraining from "./Pages/EducationTraining";
import FoodResturent from "./Pages/FoodResturent";
import HealthCare from "./Pages/HealthCare";
import WebsiteDevelopment from "./Pages/WebsiteDevelopment";
import AndroidDevelopment from "./Pages/AndroidDevelopment";
import SEO from "./Pages/SEO";
import WebsiteDesign from "./Pages/WebsiteDesign";



const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Industries" element={<Industries/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SportsFitness" element={<SportsFitness/>} />
        <Route path="/EducationTraining" element={<EducationTraining/>} />
        <Route path="/FoodResturent" element={<FoodResturent />} />
        <Route path="/HealthCare" element={<HealthCare />} />
        <Route path="/WebsiteDevelopment" element={<WebsiteDevelopment/>}/>
        <Route path="/AndroidDevelopment" element={<AndroidDevelopment/>}/>
        <Route path="/SEO" element={<SEO/>}/>
        <Route path="/WebsiteDesign" element={<WebsiteDesign/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
