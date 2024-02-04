import React from "react";
import '../Component_CSS/gallery.css';
import webDevelopment from '../Images/webDevelopment.jpg'
import AppDevelopment from '../Images/AppDevelopment.jpg'
import SEO from '../Images/SEO.jpg'
import webDesign from '../Images/webDesign.jpg'

const Gallery = () => {
  return (
    <>
      <div className="container mx-20 flex justify-center items-center">
        <div className="grid gap-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="mx-3">
              <img
                className="h-auto max-w-full rounded-lg"
                src={webDevelopment}
                alt=""
              />
              <h3 className="mx-auto my-3 flex justify-center items-center font-bold"
              >WEBSITE DEVELOPMENT</h3>
            </div>

            <div className="mx-3">
              <img
                className="h-auto max-w-full rounded-lg"
                src={AppDevelopment}
                alt=""
              />
              <h3 className="mx-auto my-3 flex justify-center items-center font-bold"
            >WEB DESINGING</h3>
            </div>

            <div className="mx-3">
            
              <img
                className="h-auto max-w-full rounded-lg"
                src={SEO}
                alt=""
              />
              <h3 className="mx-auto my-3 flex justify-center items-center font-bold"
            > SEO </h3>
            </div>

            <div className="mx-3">
              <img
                className="h-auto max-w-full rounded-lg"
                src={webDesign}
                alt=""
              />
              <h3 className="mx-auto my-3 flex justify-center items-center font-bold"
            > ANDROID DEVELOPMENT </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
