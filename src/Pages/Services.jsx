import React from "react";
import "./Services.css";
import WebsiteDevCard from "../Cards/WebsiteDevCard";
import AndroidDevCard from "../Cards/AndroidDevCard";
import SeoCard from "../Cards/SeoCard";
import WebDesignCard from "../Cards/WebDesignCard";

const Services = () => {
  return (
    <div className="services-bg  flex flex-col">
      <div className="services mx-20 my-20 justify-center">
        <h3 className="text-center font-semibold text-3xl text-white relative mt-8">
          OUR SERVICES
          <p className="text-center text-xl text-white relative mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            cumque minima delectus numquam error veniam consectetur est enim
            commodi cum temporibus quidem dolore, nulla molestias ea voluptatum
            ratione. Suscipit, dolorem!
          </p>
        </h3>
      </div>

      <WebsiteDevCard />
      <AndroidDevCard />

      <SeoCard />

      <WebDesignCard />
    </div>
  );
};

export default Services;
