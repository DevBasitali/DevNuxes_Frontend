import React from "react";
import './Services.css'
import webDevelopment from "../Images/webDevelopment.jpg";
import AppDevelopment from "../Images/AppDevelopment.jpg";
import SEO from "../Images/SEO.jpg";
import webDesign from "../Images/webDesign.jpg";

const Services = () => {
  return (
    <div className="services-bg">
      <div className="services mx-20 my-20 justify-center">
        <h3 className="text-center font-bold text-3xl text-white relative mt-8">
          OUR SERVICES
          <p className="text-center text-xl text-white relative mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            cumque minima delectus numquam error veniam consectetur est enim
            commodi cum temporibus quidem dolore, nulla molestias ea voluptatum
            ratione. Suscipit, dolorem!
          </p>
        </h3>
      </div>

      <div className="services mx-20 my-20 justify-center grid grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-center font-bold text-3xl text-white relative mt-8">
            WEBSITE DEVELOPMENT
          </h3>
          <p className="text-center font-bold text-xl text-white relative mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            atque.
          </p>
          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                HTML
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                CSS
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                JAVASCRIPT
              </span>
            </div>

            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                REACT JS
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                NEXT JS
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                ANGULAR
              </span>
            </div>

            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                NODE JS | EXPRESS JS
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                PHP | LARAVEL
              </span>
            </div>
            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                MONGODB
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                SQL
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                MARIADB
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-80 h-auto">
          <img
            src={webDevelopment}
            alt="Image 1"
            className="w-full h-full object-cover rounded transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Hover Text
          </div>
        </div>
      </div>

      <div className="services mx-20 my-20 justify-center grid grid-cols-2 gap-8 items-center">
        <div>
          <img src={SEO} alt="Image 1" className="w-80 h-auto" />
        </div>
        <div>
          <h3 className="text-center font-bold text-3xl text-white relative mt-8">
            SEARCH ENGINE OPTIMIZATION
          </h3>
          <p className="text-center font-bold text-xl text-white relative mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            atque.
          </p>
          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                ON-PAGE SEO
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                OFF-PAGE SEO
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                BACKLINKS
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="services mx-20 my-20 justify-center grid grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-center font-bold text-3xl text-white relative mt-8">
            ANDROID DEVELOPMENT
          </h3>
          <p className="text-center font-bold text-xl text-white relative mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            atque.
          </p>
          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                FLUTTER
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                REACT NATIVE
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                LARAVEL
              </span>
            </div>

            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                SQLITE
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                MARIA DB
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                MONGODB
              </span>
            </div>
          </div>
        </div>
        <div>
          <img src={AppDevelopment} alt="Image 1" className="w-80 h-auto" />
        </div>
      </div>

      <div>
        <div className="services mx-20 my-20 justify-center grid grid-cols-2 gap-8 items-center">
          <div>
            <img src={webDesign} alt="Image 1" className="w-80 h-auto" />
          </div>
          <div>
            <h3 className="text-center font-bold text-3xl text-white relative mt-8">
              WEB DESIGNING
            </h3>
            <p className="text-center font-bold text-xl text-white relative mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              atque.
            </p>

            <div className="text-center mt-8">
              <div className="flex flex-wrap justify-center">
                <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  FIGMA
                </span>
                <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  ADOBE XD
                </span>
                <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  ADOBE ILLUSTRATOR
                </span>
                <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  ADOBE PHOTOSHOP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
