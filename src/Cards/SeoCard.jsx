import React from 'react';
import seo from '../Images/Icons/seo.svg';

const SeoCard = () => {
  return (
    <>
      <div className="grid grid-cols-2 justify-center gap-8 mx-20 border-b border-gray-500 mt-10">
        <div className=" rounded-lg h-52 w-96 border border-blue-500 ml-28 mt-24">
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
                NODE JS
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                EXPRESS JS
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                PHP
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                LARAVEL
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

        <div className="mb-5">
        <div class="flex items-center justify-center ">
            <img src={seo} alt="" class="h-12 w-12 mt-5" />
            <h3 class="text-center font-bold text-2xl text-white relative mt-5 mr-2">
              Search Engine Optimization
            </h3>
          </div>
          <p className="text-center font-semibold text-sm text-white relative mt-5 px-10">
            <ul className="flex flex-col max-w-auto ">
              <span class="inline-block bg-gray-900 rounded px-3 py-1 tracking-wider text-xl font-semibold text-white mb-2 transition duration-300 transform hover:scale-105">
                Frontend
                <p class="text-3xl font-bold text-gray-400 mb-2">$75</p>
              </span>

              <span className="inline-block bg-gray-900 rounded px-3 py-1 tracking-wider text-xl font-semibold text-white mb-2 transition duration-300 transform hover:scale-105">
                Backend
                <p class="text-3xl font-bold text-gray-400 mb-2">$100</p>
              </span>
              <span className="inline-block bg-gray-900 rounded px-3 py-1 tracking-wider text-xl font-semibold text-white mb-2 transition duration-300 transform hover:scale-105">
                MERN Stack
                <p class="text-3xl font-bold text-gray-400 mb-2">$150</p>
              </span>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default SeoCard;