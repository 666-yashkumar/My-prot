 import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Aboutus from './Component/Aboutus'
import Work from './Component/Work'
import Project from './Component/Project'
import Contact from './Component/Contact'
import Cursor  from './Component/Cursor'
 
 const App = () => {
   return (
     <>

<div className="circle fixed top-0 bg-white left-0 h-full w-full -z-10 flex justify-center items-center gap-10">
        <div className="cir1 md:h-[250px]  md:w-[270px]   rounded-full bg-orange-400 flex justify-center items-center">
          <div className="cir2 md:h-[170px] md:w-[170px]   rounded-full bg-orange-500 flex justify-center items-center">
            <div className="cir3 md:h-[120px] md:w-[120px]  rounded-full bg-orange-600"></div>
          </div>
        </div>
         
         
      </div>


           <Navbar />
      <Cursor  />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <Aboutus />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
        
    </>
   )
 }
 
 export default App