import React from 'react';
import R1 from './Images/R1.png';

const Contact = () => {
  return (
    <div className="bg-zinc-700 bg-opacity-70 mx-10 mb-10 p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="form-section text-white w-full md:w-1/2 p-4 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form action="https://formspree.io/f/xdkongvg" method="POST">
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Type your email address"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="img-section w-full md:w-1/2 p-4">
          <img
            src={R1}
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
