import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Logo from "../Images/Logo/Devnuxes.png";
import Logo from "../Images/Logo/2.svg";
// import Logo from "../Images/Logo/1.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpennow, setIsOpennow] = useState(false);
  const [isOpenOnHover, setisOpenOnHover] = useState(false);

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

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleMousehover = () => {
    setisOpenOnHover(true);
  };

  const handleMousehover_leave = () => {
    setisOpenOnHover(false);
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
                    src={Logo}
                    alt="DEVNUXES"
                  />
                </Link>
              </div>
              <div className="flex-1 flex justify-center ">
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4 ">
                    <Link
                      to="/"
                      class="transition duration-200 hover:bg-gray-900 hover:text-white text-gray-300 rounded-md px-3 py-2 text-base font-medium"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      to="/About"
                      class="text-gray-300 transition duration-200 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                    >
                      About
                    </Link>

                    <div className="relative">
                      <button
                        className="px-4 py-2 transition duration-200 hover:bg-gray-900 hover:text-white text-gray-300 rounded-md text-base font-medium focus:outline-none"
                        onMouseEnter={handleMousehover}
                        onMouseLeave={handleMousehover_leave}
                      >
                        Services
                      </button>
                      {isOpenOnHover && (
                        <div
                          className="absolute w-48 bg-gray-900 shadow-lg rounded-md"
                          onMouseEnter={handleMousehover}
                          onMouseLeave={handleMousehover_leave}
                        >
                          <ul className="py-1">
                            <Link to="/WebsiteDevelopment">
                              <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                                Website Development
                              </li>
                            </Link>
                            <Link to="/AndroidDevelopment">
                              <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                                Android Development
                              </li>
                            </Link>
                            <Link to="/SEO">
                              <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                                SEO
                              </li>
                            </Link>
                            <Link to="/WebsiteDesign">
                              <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                                Website Design
                              </li>
                            </Link>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <button
                        className="px-4 py-2 transition duration-200 hover:bg-gray-900 hover:text-white text-gray-300 rounded-md text-base font-medium focus:outline-none"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Industries
                      </button>
                      {isOpen && (
                        <div
                          className="absolute w-48 bg-gray-900 shadow-lg rounded-md"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="py-1">
                            <Link to="/HealthCare">
                              <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                                Healthcare
                              </li>
                            </Link>
                            <Link to="/EducationTraining">
                              <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                                Education/Training
                              </li>
                            </Link>
                            <Link to="/SportsFitness">
                              <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                                Sports/Fitness
                              </li>
                            </Link>
                            <Link to="/FoodResturent">
                              <li className="cursor-pointer px-4 py-2 hover:bg-gray-800 text-white">
                                Food/Resturent
                              </li>
                            </Link>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Link to="/Contact">
                  <button className="ml-5 px-3 py-2 border border-alpha text-white rounded-md hover:bg-alpha bg-transparent backdrop-blur-sm transition duration-200">
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
