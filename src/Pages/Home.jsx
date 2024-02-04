import React from "react";
import "../Component_CSS/Home.css";
import Gallery from "../Components/Gallery";

const Home = () => {
  return (
    <>
      <div className="home_container"></div>
      <div className="About-us mx-20 my-20 justify-center">
        <h3 className="text-center font-bold text-3xl text-white">ABOUT US</h3>
        <p className="my-10 font-size text-lg text-white">
          DevNuxes is a dynamic digital agency specializing in comprehensive
          solutions for online success. With a strategic focus on software
          development, website development, SEO, and website designing, we
          empower businesses to thrive in the digital realm. Our expert team
          crafts tailored strategies and cutting-edge technologies to elevate
          brands and drive growth. Whether it's creating intuitive websites,
          optimizing online visibility, or developing innovative software
          solutions, DevNuxes delivers excellence at every step. We prioritize
          client satisfaction, fostering long-term partnerships built on trust
          and innovation. Partner with DevNuxes and unlock the full potential of
          your digital presence.
        </p>
        <Gallery />
      </div>
    </>
  );
};

export default Home;
