import React from "react";
import "./SportsFitness.css";

const SportsFitness = () => {
  return (
    <div className="Container">
      <div className="flex flex-col border-b border-gray-800">
        <div className="services mx-20 my-20 justify-center">
          <h3 className="text-left font-bold text-5xl text-white relative mt-8 mb-5">
            Sports & Fitness Design Services
          </h3>
          <p className="text-left text-base text-white relative mt-8">
            DevNuxes is a premier digital agency in the USA specializing
            in creating innovative web, app, and landing page solutions. With a
            dedicated focus on the sports and fitness industry, we smoothly
            blend creativity and functionality to enhance user experiences. Our
            expert team is committed to delivering professional designs that not
            only attract but also empower businesses in the dynamic world of
            sports and fitness. Elevate your online presence with DevNuxes –
            where design meets excellence.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col border border-gray-800 bg-gray-800">
        <div className="services mx-20 mb-20 justify-center">
          <h3 className="text-left font-bold text-5xl text-white relative mt-8 mb-5">
            Our Expertise
          </h3>
          <p className="text-left text-base text-white relative mt-8">
            Our highly skilled designers are experts in digital design services,
            specializing in designing impactful solutions for the sports and
            fitness industry. With a keen understanding of industry dynamics,
            our team excels in creating visually appealing and functionally
            robust designs. Whether it's web development, app interfaces, or
            innovative landing pages, DevNuxes combines expertise and
            creativity to elevate your brand's digital presence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportsFitness;
