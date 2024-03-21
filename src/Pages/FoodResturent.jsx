import React from "react";

const FoodResturent = () => {
  return (
    <div className="Container">
      <div className="flex flex-col border-b border-gray-800">
        <div className="services mx-20 my-20 justify-center">
          <h3 className="text-left font-bold text-5xl text-white relative mt-8 mb-5">
            Food & Restaurant Design Services{" "}
          </h3>
          <p className="text-left text-base text-white relative mt-8">
            At DevNuxes, we specialize in creating exceptional UI/UX designs
            built for the Food & Restaurant industry. Our expert team smoothly
            blends aesthetics with functionality to deliver visually appealing
            and user-friendly experiences. From intuitive navigation to
            attractive visuals, we prioritize designing interfaces that enhance
            customer engagement and satisfaction.
          </p>
        </div>
      </div>
      <div className="flex flex-col border border-gray-800 bg-gray-800">
        <div className="services mx-20 mb-20 justify-center">
          <h3 className="text-left font-bold text-5xl text-white relative mt-8 mb-5">
            Our Expertise
          </h3>
          <p className="text-left text-base text-white relative mt-8">
            We are your trusted partner for expert UI/UX designs in the dynamic
            digital world of Food & restaurant. With a focus on smooth user
            interactions and visually appealing interfaces, our dedicated team
            brings a wealth of knowledge to amplify your brand's digital
            presence. From menu navigation to attractive visuals, we ensure a
            delightful and engaging user experience. Elevate your Food &
            restaurant business with DevNuxes, where expertise meets design
            excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodResturent;
