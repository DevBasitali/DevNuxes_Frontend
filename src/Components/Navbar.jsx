import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo/logo.png.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar bg-${
          scrolled ? "gray-800" : "current"
        } fixed top-0 left-0 right-0 z-10 transition duration-3000 ease-in-out`}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    //   src={Logo}
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4">
                    <Link
                      to="/"
                      class=" hover:bg-gray-700 hover:text-white text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      to="/About"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      About
                    </Link>
                    <Link
                      to="/Services"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Services
                    </Link>
                    <div className="relative">
                      <button
                        className="px-4 py-2 hover:bg-gray-700 hover:text-white text-white rounded-md focus:outline-none"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Industries
                      </button>
                      {isOpen && (
                        <div
                          className="absolute mt-2 w-48 bg-gray-900 shadow-lg rounded-md"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="py-1">
                            <Link to='/Services'>
                            <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                              Healthcare
                            </li>
                            </Link>
                            <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                              Education/Training
                            </li>
                            <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                              Sports/Fitness
                            </li>
                            <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                              Food/Resturent
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    {/* <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      Dropdown button{" "}
                      <svg
                        class="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button> */}

                    {/* <div
                      id="dropdown"
                      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div> */}

                    {/* <Link
                      to="/Contact"
                      class="text-gray-300 hover:text-blue-800 rounded-md border border-blue-500 px-3 py-2 text-sm font-medium"
                    >
                      <button>Contact Us</button>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
