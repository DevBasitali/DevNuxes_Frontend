import React from "react";
import "./Home.css";
import webDev from "../Images/webDevelopment.jpg";
import webDes from "../Images/webDesign.jpg";
import appDev from "../Images/SEO.jpg";
import seo from "../Images/AppDevelopment.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home_container"></div>
      <div className="services mx-20 my-20 justify-center">
        <h3 className="text-center font-bold text-3xl text-white relative mt-8">
          ABOUT US
        </h3>

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
        <div class="flex justify-center mt-4">
          <a href="/services">
            <button type="button" className="button" target="_blank">
              Read More
            </button>
          </a>
        </div>
      </div>

      <div className="services-div">
        <div className="services mx-20 my-20 justify-center">
          <h3 className="text-center font-bold text-3xl text-white relative mt-8 tracking-wider">
            SERVICES
          </h3>
          <div class="flex ml-10 mr-10 gap-4 my-10">
            <div class="relative">
              <img class="h-60 max-w-full rounded-lg" src={webDev} alt="" />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center text-white text-center font-bold tracking-wider">
                WEB DEVELOPMENT
              </div>
            </div>

            <div class="relative">
              <img class="h-60 max-w-full rounded-lg" src={appDev} alt="" />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center text-white text-center font-bold tracking-wider">
                APP DEVELOPMENT
              </div>
            </div>

            <div class="relative">
              <img class="h-60 max-w-full rounded-lg" src={seo} alt="" />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center text-white text-center font-bold tracking-wider">
                SEO
              </div>
            </div>

            <div class="relative">
              <img class="h-60 max-w-full rounded-lg" src={webDes} alt="" />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center text-white text-center font-bold tracking-wider">
                WEB DESIGNING
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-4">
            <a href="/services">
              <button type="button" className="button">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
