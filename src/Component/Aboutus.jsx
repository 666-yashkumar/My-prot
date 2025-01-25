import React from "react";
import Profile from "./Images/Profile.jpeg";

const Aboutus = () => {
  return (
    <div className="py-[20px] bg-zinc-700 mx-10 mb-10  bg-opacity-30 rounded-lg">
      <div className="contain md:flex items-center md:gap-20 gap-0  flex flex-col justify-center  md:flex-row">
      <div className="abu md:text-[150px] text-[50px]  ">ABOUT</div>
            <div className="md:flex md:justify-between items-center md:px-0 gap-[20px]   flex flex-col justify-center  md:flex-row ">
                <div className="img md:w-[200px] w-[160px] md:h-[300px] h-[200px] bg-black flex-shrink-0 "></div>
                <div className="info">
                 <p className="txt md:text-[20px] text-[15px] md:px-20 px-16  "> Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque, quidem
                  quasi ab debitis voluptate eveniet voluptas   reprehenderit iusto,
                  eligendi cum perspiciatis velit  autem fugiat officia. Voluptatem cum vel
                  aliquid voluptates.</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Aboutus;

// {/* <div className="h-[100vh] w-full">
//         <div className="about-title flex justify-center items-center">
//           <h1 className="text-4xl font-bold pt-10">About Us</h1>
//         </div>
//         <div className="about-content flex justify-center  gap-10 p-10">
//           <div className="about-left">
//             <img
//               className="w-[15vw] h-[40vh] object-cover "
//               src={Profile}
//               alt="Profile"
//             />
//           </div>
//           <div className="about-right max-w-[70%]">
//             <p className="text-[1.2vw]">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//               quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Vitae quibusdam tempora molestias, reiciendis rem atque voluptate
//               voluptas. Consectetur labore dolore maiores quos dolor nihil
//               aliquam in quidem, modi iste eligendi.
//             </p>
//             <div className="skills mt-10 pb-2">
//               <div className="flex gap-5 items-center  ">
//                 {" "}
//                 <p className="text-[1.4vw]">HMTL & CSS</p>{" "}
//                 <hr className="w-[45vw] color-white border-none bg-gradient-to-r from-blue-300 to-violet-900 h-[3px]" />{" "}
//               </div>
//               <div className="flex gap-5 items-center  ">
//                 {" "}
//                 <p className="text-[1.4vw]">JavaScript & React</p>{" "}
//                 <hr className="w-[38vw] color-white border-none bg-gradient-to-r from-blue-300 to-violet-900 h-[3px]" />{" "}
//               </div>
//               <div className="flex gap-5 items-center  ">
//                 {" "}
//                 <p className="text-[1.4vw]">Tailwind & Bootstrap</p>{" "}
//                 <hr className="w-[20vw] color-white border-none bg-gradient-to-r from-blue-300 to-violet-900 h-[3px]" />{" "}
//               </div>
//               <div className="flex gap-5 items-center  ">
//                 {" "}
//                 <p className="text-[1.4vw]">Node & Express</p>{" "}
//                 <hr className="w-[40vw] color-white border-none bg-gradient-to-r from-blue-300 to-violet-900 h-[3px]" />{" "}
//               </div>
//               <div className="flex gap-5 items-center  ">
//                 {" "}
//                 <p className="text-[1.4vw]">MongoDB & Git</p>{" "}
//                 <hr className="w-[37vw] color-white border-none bg-gradient-to-r from-blue-300 to-violet-900 h-[3px]" />{" "}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="achivement flex justify-between items-center   mt-10">
//           <div className="about-achive">
//             <h1 className="text-2xl font-bold ">
//               Achivement <p className="text-sm">Lorem ipsum dolor </p>
//             </h1>

//           </div>
//           {/* <hr  /> */}
//           <div className="about-achive">
//             <h1 className="text-2xl font-bold  ">
//               Achivemen <p className="text-sm">Lorem ipsum dolor </p>
//             </h1>
//           </div>
//           {/* <hr/> */}
//           <div className="about-achive">
//             <h1 className="text-2xl font-bold">
//               Achivement <p className="text-sm">Lorem ipsum dolor </p>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </> */}

{
  /* <>
<div className=" bg-zinc-700 mx-10 py-[10px] rounded-lg  bg-opacity-30  ">
  {/* About Title 
  <div className="about-title flex justify-center items-center">
    <h1 className="text-4xl font-bold pt-10">About</h1>
  </div>

  
  <div className="about-content flex flex-col md:flex-row justify-center items-center gap-10 p-5 md:p-10">
    <div className="about-left">
      <img
        className="w-[80vw] h-[40vh] md:w-[15vw] md:h-[40vh] object-cover"
        src={Profile}
        alt="Profile"
      />
    </div>
    <div className="about-right max-w-full md:max-w-[70%]">
      <p className="text-[5vw] md:text-[1.2vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae quibusdam tempora molestias, reiciendis rem atque voluptate
        voluptas. Consectetur labore dolore maiores quos dolor nihil
        aliquam in quidem, modi iste eligendi.
      </p>

      

      
      <div className="skills mt-10 pb-2">
        {[
          { skill: "HTML & CSS", width: "60vw", mdWidth: "45vw" },
          { skill: "JavaScript & React", width: "55vw", mdWidth: "38vw" },
          { skill: "Tailwind & Bootstrap", width: "30vw", mdWidth: "20vw" },
          { skill: "Node & Express", width: "55vw", mdWidth: "40vw" },
          { skill: "MongoDB & Git", width: "52vw", mdWidth: "37vw" }
        ].map(({ skill, width, mdWidth }, index) => (
          <div key={index} className="flex gap-5 items-center hover:scale-105 duration-300">
            <p className="text-[4vw] md:text-[1.4vw]">{skill}</p>
            <hr className={`w-[${width}] md:w-[${mdWidth}] bg-gradient-to-r from-blue-300 to-violet-900 h-[3px] border-none`} />
          </div>
        ))}
      </div>
    </div>
  </div>

  
  <div className="achivement flex flex-col md:flex-row justify-between items-center mt-4 gap-5 p-5 mx-5">
    {[
      { count: "8+", text: "Lorem ipsum dolor" },
      { count: "10+", text: "Lorem ipsum dolor" },
      { count: "5+", text: "Lorem ipsum dolor" }
    ].map(({ count, text }, index) => (
      <>
        <div key={index} className="about-achive flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">{count}</h1>
          <p className="text-sm">{text}</p>
        </div>
        {index < 2 && (
          <div className="w-full md:w-auto border-t md:border-t-0 md:border-l md:h-[80px] border-gray-300 my-5 md:my-0"></div>
        )}
      </>
    ))}
  </div>
</div>
</> */
}
