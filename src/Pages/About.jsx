import React from "react";

const About = () => {
  return (
    <>
      <div
        id="custom-controls-gallery"
        class="relative w-full"
        data-carousel="slide"
      >
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
              alt=""
            />
          </div>

          <div
            class="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        </div>
        <div class="flex justify-center items-center pt-4">
          <button
            type="button"
            class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
            aria-label="Previous"
          >
            <span
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white"
              aria-hidden="true"
            >
              <svg
                class="rtl:rotate-180 w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
            data-carousel-next
            aria-label="Next"
          >
            <span
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white"
              aria-hidden="true"
            >
              <svg
                class="rtl:rotate-180 w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
