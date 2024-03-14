import React from "react";
import "./About.css";
import avt from "../Images/p-avatar.png";

const About = () => {
  return (
    <div className="Page-Color flex flex-col">
      <div className="services mx-20 my-20 justify-center">
        <h3 className="text-center font-bold text-3xl text-white relative mt-8 mb-5">
          ABOUT US
        </h3>
        <p className="text-center text-xl text-white relative mt-8">
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
      </div>

      <div className="justify-center">
        <h3 className="text-center font-bold text-3xl text-white relative mt-8">
          OUR BEST TEAM
        </h3>
      </div>

      <div className=" ml-20 mr-20 my-10 flex gap-10">
        <div className="flex flex-col items-center w-full md:w-1/4 border border-blue-500 rounded-lg opacity-95">
          <img
            className="w-40 h-40 rounded-full mx-auto self-center mb-4"
            src={avt}
          />
          <h3 className="text-xl font-medium text-white mb-2">Basit Ali</h3>
          <p className=" text-white text-base leading-loose">Web Developer</p>
        </div>

        <div className=" flex flex-col items-center w-full md:w-1/4 border border-blue-500 rounded-lg opacity-95">
          <img
            className="w-40 h-40 rounded-full mx-auto self-center mb-4"
            src={avt}
          />
          <h3 className="text-xl font-medium text-white mb-2">Arsalan Ayyaz</h3>
          <p className="text-white text-base leading-loose">Seo Expert</p>
        </div>
        <div className=" flex flex-col items-center w-full md:w-1/4  opacity-95 border border-blue-500 rounded-lg">
          <img
            className="w-40 h-40 rounded-full mx-auto self-center mb-4"
            src={avt}
          />
          <h3 className="text-xl font-medium text-white mb-2">Huzaifa Khan</h3>
          <p className="text-white text-base leading-loose">Web Designer</p>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/4 opacity-95 border border-blue-500 rounded-lg">
          <img
            className="w-40 h-40 rounded-full mx-auto self-center mb-4"
            src={avt}
          />
          <h3 className="text-xl font-medium text-white mb-2">Mr. Asim</h3>
          <p className="text-white text-base leading-loose">Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
