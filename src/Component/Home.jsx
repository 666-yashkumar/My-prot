import React from 'react';
import My from './Images/My.jpg';
import YASH from './Images/_YASH.pdf';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div className="home md:py-[100px] mt-16 py-[150px] bg-zinc-700 mx-10 mb-10 bg-opacity-30 flex flex-col rounded-lg justify-center items-center relative">
        {/* Profile Picture */}
        <div className="image md:w-[170px] w-[90px] h-[90px] md:h-[170px] border-2 border-none rounded-full bg-slate-200 overflow-hidden shadow-xl">
          <img className="w-full h-full object-cover" src={My} alt="Profile picture of Yash" />
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h1 className="ani md:text-[50px] text-[30px] font-semibold text-black mix-blend-overlay shadow-black shadow-2xl px-4">
            Hello, I'm YASH
          </h1>
          <h1 className="md:text-[40px] text-[25px] font-semibold shadow-2xl mix-blend-overlay text-black shadow-black">
            I'm Web&nbsp;
            <TypeAnimation
              sequence={['Developer', 1000, 'Designer', 1000, 'Creator', 1000]}
              speed={10}
              repeat={Infinity}
            />
          </h1>
        </div>

        {/* Buttons */}
        <div className="button md:flex gap-2">
          <h1 className="md:text-[20px] text-[15px] capitalize font-semibold px-2 m-2 py-1 bg-white text-black rounded-full hover:text-white hover:bg-slate-500 cursor-pointer">
          <a href="#contact">Connect with me</a>
          </h1>
          <h1 className="md:text-[20px] text-[15px] capitalize font-semibold px-2 ml-5 md:m-2 md:ml-3 py-1 md:border-l-2 md:border-white hover:text-zinc-900 cursor-pointer">
            <span className="border border-none bg-white px-2 py-1 rounded-md hover:bg-slate-500">
            <a href={YASH} download="Yash_Resume.pdf" className="flex items-center justify-center">
                  My Resume
                  </a>
            </span>
          </h1>
        </div>

        {/* Social Media Links */}
        <div className="social-icons fixed top-1/2 right-10 transform -translate-y-1/2  flex flex-col px-8 gap-4 ">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black text-[30px] hidden md:block"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-[30px] hidden md:block"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 text-[30px] hidden md:block"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-900 text-[30px] hidden md:block"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
