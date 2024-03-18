import React from "react";
import './HealthCare.css';

const HealthCare = () => {
  return (
    <>
      <div className="Container">
        <div className="flex flex-col border-b border-gray-800">
          <div className="services mx-20 my-20 justify-center">
            <h3 className="text-left font-bold text-5xl text-white relative mt-8 mb-5">
              Healthcare Design Services
            </h3>
            <p className="text-left text-base text-white relative mt-8">
              DevNuxes excels as a digital Company, specializing in healthcare
              design services. With a deep understanding of the healthcare
              industry, we create visually compelling designs that establish a
              strong brand presence. Our expertise lies in creating
              user-friendly interfaces and impactful branding strategies
              customized to enhance the identity of healthcare providers. Trust
              DevNuxes to elevate your healthcare brand with innovative digital
              designs and strategic branding solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col border border-gray-800 bg-gray-800">
          <div className="services mx-20 mb-20 justify-center">
            <h3 className="text-left font-bold text-5xl text-white relative mt-8 mb-5">
              Our Approach for Healthcare Industry
            </h3>
            <p className="text-left text-base text-white relative mt-8">
              We're really good at making healthcare brands look great. We know
              how to create logos and designs that make healthcare information
              easy to understand. Our expertise lies in making healthcare brands
              both professional and friendly, so people feel good about choosing
              your services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthCare;
