import React from "react";
import "./Home.css";
import webdev from '../Images/dev.svg';
import webdes from '../Images/2.svg';
import appdev from '../Images/3.svg';
import seo from '../Images/4.svg';

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
          <h3 className="text-center font-bold text-3xl text-white relative mt-8 tracking-wider mb-10">
            SERVICES
          </h3>

          <div class="grid grid-cols-4 gap-2 ">
            <div class="size-64 rounded-lg border border-blue-500">
             {/* inline-block bg-gray-900 */}
             <img src={webdev} alt="GIF" class="size-24 object-cover mx-auto" />
              <h3 className="text-center text-sm text-white relative tracking-wider mt-1.5">
                Website Development
              </h3>
              <p className="text-center text-sm p-5 text-white relative tracking-wider">
              Creating user-friendly, responsive websites with cutting-edge design and seamless functionality for online presence
              </p>
            </div>
            <div class="size-64 rounded-lg border border-blue-500">
             {/* inline-block bg-gray-900 */}
             <img src={appdev} alt="GIF" class="size-24 object-cover mx-auto mt-1.5" />
              <h3 className="text-center text-sm text-white relative tracking-wider">
                Web Design
              </h3>
              <p className="text-center text-sm p-5 text-white relative tracking-wider">
              Designing visually stunning, intuitive websites tailored to user experience and brand identity for online success.
              </p>
            </div>
            <div class="size-64 rounded-lg border border-blue-500">
             {/* inline-block bg-gray-900 */}
             <img src={seo} alt="GIF" class="size-24 object-cover mx-auto mt-3" />
              <h3 className="text-center text-sm text-white relative tracking-wider">
              Android Development
              </h3>
              <p className="text-center text-sm p-5 text-white relative tracking-wider">
              Crafting innovative, user-centric mobile applications with robust features and seamless performance for Android devices
              </p>
            </div>
            <div class="size-64 rounded-lg border border-blue-500">
             {/* inline-block bg-gray-900 */}
             <img src={webdes} alt="GIF" class="size-24 object-cover mx-auto mt-3" />
              <h3 className="text-center text-sm text-white relative tracking-wider">
                SEO
              </h3>
              <p className="text-center text-sm p-5 text-white relative tracking-wider">
              Enhancing online visibility and driving organic traffic through strategic optimization techniques and targeted keyword research
              </p>
            </div>
          </div>
          <div class="flex justify-center mt-8">
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
