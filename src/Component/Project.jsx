import React from "react";
import Sun from "./Images/Sun.png";
import Ochi from "./Images/Ochi.png";

const Project = () => {
  return (
    <div className="py-[20px] bg-zinc-700 mx-10 mb-10  bg-opacity-30 rounded-lg ">
      <div className="contain md:flex items-center md:gap-20 px-10 gap-0  flex flex-col justify-between  md:flex-row">
        <div className="abu md:text-[90px] text-[50px]  ">PROJECT</div>

        <div className="bex  md:flex justify-center items-center gap-10 px-20">
          <div className="b1 w-[250px] h-[210px] md:h-[320px] rounded-lg hover:scale-105 transition-all ease-linear bg-black bg-opacity-30 ">
            <img src={Ochi} alt="" className="p-4" />
            <div className="txxt text-white text-center">
              <a
                href="https://ochi-drab.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-xl text-black underline py-2">The Ochi</h1>

                <p className="text-sm text-white hover:underline px-4 md:block hidden">
                  Ochi is an app designed to help users block distracting
                  websites and apps.
                </p>
              </a>
            </div>
          </div>

          <div className="b2 w-[250px] h-[210px] mt-2 md:mt-0  md:h-[320px] rounded-lg hover:scale-105 transition-all ease-linear bg-black">
            <img src={Sun} alt="" className="p-4" />
            <div className="txxt text-white text-center">
              <a
                href="https://sun-down-cyan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer "
              >
                <h1 className="text-xl text-white underline py-2 px-4">
                  SunDown
                </h1>

                <p className="text-sm text-white hover:underline md:block hidden">
                  SunDown is a fully responsive and creatively website,
                  optimized for seamless user experiences .
                </p>
              </a>
            </div>
          </div>
          <div className="b3 w-[250px] h-[210px] md:h-[320px] text-white rounded-lg text-center hover:scale-105 transition-all ease-linear bg-black md:block hidden">
            <h1 className="text-[20px]" >Other Links</h1>
            <h2 className="text-blue-600 hover:underline">Linkone</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
