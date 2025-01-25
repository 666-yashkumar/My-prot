import React from "react";
import Pt2 from "./WorkP.jsx/Pt2";
import Fy1 from "./Images/Fy1.jpeg";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGithub,
  FaJs,
  FaBootstrap,
} from "react-icons/fa"; // Font Awesome icons
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Work = () => {
  const skills = [
    { icon: <FaHtml5 className="text-red-500 w-12 h-12" />, label: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 w-12 h-12" />, label: "CSS" },
    { icon: <FaReact className="text-blue-500 w-12 h-12" />, label: "React" },
    { icon: <FaJs className="text-blue-500 w-12 h-12" />, label: "JavaScript" },
    {
      icon: <FaNodeJs className="text-green-500 w-12 h-12" />,
      label: "Node.js",
    },
    { icon: <FaGithub className="text-gray-500 w-12 h-12" />, label: "GitHub" },
    {
      icon: <SiTailwindcss className="text-blue-400 w-12 h-12" />,
      label: "Tailwind CSS",
    },
    // { icon: <SiMongodb className="text-green-500 w-12 h-12" />, label: "MongoDB"},
  ];

  return (
    <div className="py-[50px]  bg-zinc-700 mx-10 mb-10   bg-opacity-30 rounded-lg ">
      <div className="cont md:flex   md:px-0 px-[25px] md:gap-24 text-center items-center">
        <div className="tx text-[50px] md:text-[150px]">SKILLS </div>

        <div className="boxes  py-4 md:py-0 gap-4 md:gap-10 md:grid text-center items-center  flex flex-col  md:grid-cols-2 ">
          {/* box1 */}
          <div className="box1 overflow-hidden w-[240px] h-[270px] rounded-xl bg-zinc-400 flex flex-col justify-between items-center">
            <div className="flex  justify-center items-center flex-grow bg-black ">
              <p className="tst text-center text-white text-[25px] px-2 font-extrabold">
                Beneath the stars, the world feels wide,
              </p>
            </div>
            <p className="py-2">Text Effect</p>
          </div>
          {/* box2 */}
          <div className="box2 w-[240px]  h-[270px] md:mt-0 mt-2 rounded-xl bg-zinc-400 flex flex-col items-center justify-center   ">
            <div className="flex  justify-center items-center flex-grow bg-black rounded-xl">
              {/* <Pt2/> */}
            </div>
            <p className="py-2">Text Effect</p>
          </div>
          {/* box3 */}
          <div className="box3 w-[240px] h-[270px] rounded-xl bg-zinc-400  flex-col  justify-center hidden md:block items-center">
            <div className="flex  justify-center items-center flex-grow  py-6  ">
              <div className="shap "></div>
            </div>
            <p className="pt-10">Shape Effect</p>
          </div>
          {/* box4 */}
          <div className="box4 w-[240px] h-[270px] rounded-xl bg-zinc-400 hidden md:block overflow-hidden relative">
            <div className="ig relative flex justify-center">
              <img src={Fy1} alt="" className="h-[220px] absolute" />
              <p className="absolute w-[240px] h-[220px] flex items-center text-center justify-center text-blue-500 bg-black text-[50px] fon opacity-0 hover:opacity-100 transition-opacity duration-300">
                Small DETAILS
              </p>
            </div>
            <span className="absolute bottom-2 left-0 right-0 text-center text-black">
              Hover Effect
            </span>
          </div>
        </div>
        {/* icons */}
        <div className="icons flex   flex-col  gap-4 md:ml-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card flex items-center p-2    border  rounded-lg bg-gray-300 bg-opacity-20 hover:bg-gray-600 duration-300 hover:scale-105"
            >
              {skill.icon}
              <p className="pl-4 text-lg font-bold">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

{
  /* <div className="icons flex   flex-col  gap-4 md:ml-8">
{skills.map((skill, index) => (
  <div
    key={index}
    className="skill-card flex items-center p-2 border-2  rounded-lg bg-gray-300 bg-opacity-20 hover:bg-gray-600 duration-300 hover:scale-105"
  >
    {skill.icon}
    <p className="pl-4 text-lg font-bold">{skill.label}</p>
  </div>
))}
</div> */
}
