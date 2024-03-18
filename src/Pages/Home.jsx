import React from "react";
import "./Home.css";
import webdev from "../Images/web-dev-01.svg";
import webdes from "../Images/web_design.svg";
import appdev from "../Images/Android_Dev.svg";
import seo from "../Images/seo.svg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home_container"></div>
      <div className="services mx-20 my-20 justify-center">
        <h3 className="text-center font-bold text-3xl text-white relative mt-8">
          ABOUT US
        </h3>

        <p className="my-10 mx-20 font-size text-center text-lg text-white">
          DevNuxes is a dynamic digital agency specializing in comprehensive
          solutions for online success. With a strategic focus on software
          development, website development, SEO....
        </p>
        <div className="flex justify-center mt-4 ">
          <a href="/About">
            <button type="button" className=" button" target="_blank">
              Read More
            </button>
          </a>
        </div>
      </div>

      <div className="services-div">
        <div className="services mx-20 my-20 justify-center">
          <h3 className="text-center font-bold text-3xl text-white relative mt-8 tracking-wider mb-10">
            SERVICES
          </h3>

          <div className="services-card grid grid-cols-4 gap-2 ">
            <div className="size-64 bg-gray-900">
              <img
                src={webdev}
                alt="GIF"
                className="size-28 object-cover mx-auto mt-2 mb-3"
              />
              <h3 className="text-center text-base font-bold text-white relative tracking-wider">
                Website Development
              </h3>
              <p className="text-center text-sm p-5 text-slate-300 relative tracking-wider">
                Crafting digital experiences with code and creativity.{" "}
              </p>
            </div>
            <div className="size-64  bg-gray-900">
              <img
                src={webdes}
                alt="GIF"
                className="size-28 object-cover mx-auto mt-2 mb-3"
              />
              <h3 className="text-center text-base font-bold text-white relative tracking-wider">
                Website Design
              </h3>
              <p className="text-center text-sm p-5 text-slate-300 relative tracking-wider">
                Designing intuitive, visually stunning websites for users.
              </p>
            </div>
            <div className="size-64  bg-gray-900">
              <img
                src={appdev}
                alt="GIF"
                className="size-28 object-cover mx-auto mt-2 mb-3"
              />
              <h3 className="text-center text-base font-bold text-white relative tracking-wider">
                Android Development
              </h3>
              <p className="text-center text-sm p-5 text-slate-300 relative tracking-wider">
                Creating innovative mobile apps for Android users.
              </p>
            </div>
            <div className="size-64  bg-gray-900">
              <img
                src={seo}
                alt="GIF"
                className="size-28 object-cover mx-auto mt-2 mb-3"
              />
              <h3 className="text-center text-base font-bold text-white relative tracking-wider">
                Search Engine Optimiztion
              </h3>
              <p className="text-center text-sm p-5 text-slate-300  relative tracking-wider">
                Optimizing websites to rank higher in search results.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a href="/services">
              <button type="button" className="button">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className=" counter-card bg-gray-900 grid grid-cols-3 gap-2 mx-16">
        <div className="grid grid-cols-2 h-32 text-white  border-r border-black  justify-center items-center">
          <div className="text-center">
            <h1 className="font-bold text-6xl ml-14">89+</h1>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mr-16">Projects Delivered</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 h-32 text-white border-r border-black justify-center items-center">
          <div className="text-center">
            <h1 className="font-bold text-6xl ml-14">65+</h1>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mr-16">Satisfied Clients</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 h-32 text-white justify-center items-center">
          <div className="text-center">
            <h1 className="font-bold text-6xl ml-14">15</h1>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mr-16">Expert Teamates</h3>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Home;
