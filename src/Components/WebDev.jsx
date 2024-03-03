import React from 'react';

const webDev = () => {
  return (
    <>
      <div class="my-20 justify-center">
        <h2 className="text-center font-bold text-3xl text-white relative mt-8">WEB DEVELOPMENT</h2>
        <p className="text-center font-bold text-xl text-white mt-8 mx-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          totam laudantium illo eveniet dignissimos voluptatem eum commodi
          perferendis quam sed vitae praesentium, alias deserunt at dolore, ab
          odio. Culpa, minima!
        </p>
      </div>

      <div class=" flex gap-10  my-20 mx-20">
        <div class=" max-w-fit	 ml-10 mr-10 p-8 rounded-lg overflow-hidden shadow-lg shadow-black transition-transform transform hover:scale-105">
          <h2 class="text-3xl font-bold text-white mb-4 tracking-widest">Frontend</h2>
          <p class="text-gray-200 mb-6">BASIC</p>
          <p class="text-4xl font-bold text-gray-400 mb-6">$75</p>
          <ul class="text-sm text-gray-600 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Responsive
            </li>
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Advanced Features
            </li>
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              React JS
            </li><li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Angular
            </li>
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Next JS
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              24/7 Support
            </li>

          </ul>
          {/* <div class="p-4">
            <button class="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
              Select Plan
            </button>
          </div> */}
        </div>

        <div class="ml-10 mr-10 p-8 rounded-lg overflow-hidden shadow-lg shadow-black transition-transform transform hover:scale-105">
          <h2 class="text-3xl font-bold text-white mb-4 tracking-widest">BACKEND</h2>
          <p class="text-gray-200 mb-6">BASIC</p>
          <p class="text-4xl font-bold text-gray-400 mb-6">$75</p>
          <ul class="text-sm text-gray-600 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Node JS
            </li>
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Epress JS
            </li>
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              PHP Laravel
            </li><li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              MongoDB
            </li>
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              MySQL
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              24/7 Support
            </li>

          </ul>
          {/* <div class="p-4">
            <button class="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
              Select Plan
            </button>
          </div> */}
        </div>

        <div class="ml-10 mr-10 p-8 rounded-lg overflow-hidden shadow-lg shadow-black transition-transform transform hover:scale-105">
          <h2 class="text-3xl font-bold text-white mb-4 tracking-widest">FULL-STACK</h2>
          <p class="text-gray-200 mb-6">BASIC</p>
          <p class="text-4xl font-bold text-gray-400 mb-6">$130</p>
          <ul class="text-sm text-gray-600 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Responsive
            </li>
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Advanced Features
            </li>
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Fully Dynamic
            </li><li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              
            </li>
            <li class="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Next JS
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              24/7 Support
            </li>

          </ul>
          {/* <div class="p-4">
            <button class="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
              Select Plan
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default webDev;
