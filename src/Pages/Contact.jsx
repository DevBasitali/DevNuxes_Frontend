import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Contact.css";

const Contact = () => {
  const [FormData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    company: '',
    serviceRequired: '',
    projectDetails: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/', FormData);
      console.log(response.data); // Assuming the response contains some data
      // You can handle success actions here, such as displaying a success message
    } catch (error) {
      console.error('Error submitting form:', error);
      // You can handle error actions here, such as displaying an error message
    }
  };

  return (

    <>
      <div className="Form_container">
        <div class="grid grid-rows-1">
          <h1 className="text-white mx-20 pt-20 mb-7 text-5xl font-bold">
            Let’s work together.
          </h1>
          <p className="text-white mx-20 text-base mb-20 ">
            We believe in achieving the best results by being a part of your
            business for a long time. Let's work together consistently, making
            our experts feel like your remote team. Excited to move forward with
            you?
          </p>
          <div class="grid grid-cols-2 gap-8 mx-20">

            <div className=" bg-gray-800 w-2/2 py-10 px-10 rounded-2xl">
              <form className=" grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <div class="mb-2">
                  <label class="block text-sm font-medium text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    placeholder="ex: John"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-300 shadow-sm focus:ring-alpha text-sm font-medium text-white"
                    value={FormData.fname}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-2">
                  <label class="block text-sm font-medium text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    placeholder="ex: Wick"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-300 shadow-sm focus:ring-alpha text-sm font-medium text-white"
                    value={FormData.lname}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-2">
                  <label class="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ex: contact@devnuxes.com"
                    class="mt-1 block w-full rounded-md bg-gray-800 border-gray-300 shadow-sm  focus:ring-alpha text-sm font-medium text-white"
                    value={FormData.email}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-2">
                  <label class="block text-sm font-medium text-white">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="ex: DevNuxes"
                    class="mt-1 block w-full rounded-md bg-gray-800 border-gray-300 shadow-sm  focus:ring-alpha text-sm font-medium text-white"
                    value={FormData.company}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-2">
                  <label class="block text-sm font-medium text-white">
                    Service Required
                  </label>
                  <input
                    type="text"
                    name="serviceRequired"
                    placeholder="ex: web Design"
                    class="mt-1 block w-full rounded-md bg-gray-800 border-gray-300 shadow-sm  focus:ring-alpha text-sm font-medium text-white"
                    value={FormData.serviceRequired}
                    onChange={handleChange}
                  />
                </div>
              </form>
              <div class=" mt-2">
                <label class="block text-sm font-medium text-white">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  rows="4"
                  className="mt-1 block w-full rounded-md text-white text-sm font-medium bg-gray-800 border-gray-300 shadow-sm focus:ring-alpha"
                  placeholder="Write your Project Details here..."
                  value={FormData.projectDetails}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="border border-alpha hover:bg-alpha text-white font-normal py-2 px-5 rounded mt-5"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </div>

            <div className="w-96 flex flex-col px-10 mt-10">
              <h2 class="text-4xl font-bold text-white mb-16">Contact Us.</h2>
              <h3 class="text-gray-100 font-bold text-2xl">Email us</h3>
              <h3 class="text-gray-100 mb-4 text-xl">contact@devnuxes.com</h3>
              <h3 class="text-gray-100 font-bold text-2xl">Call us</h3>
              <h3 class="text-gray-100 mb-4 text-xl">+92 (313) 5359605</h3>
              <h3 class="text-gray-100 font-bold text-2xl">Address</h3>
              <h3 class="text-gray-100 text-xl">
                3003 West Olympic Blvd Ste 205 Unit #1015 Los Angeles, CA 90006
              </h3>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Contact;
