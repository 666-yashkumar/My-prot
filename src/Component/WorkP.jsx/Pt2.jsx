import React, { useState, useEffect } from 'react';

const Pt2 = () => {

    useEffect(() => {
        // Dynamically load the Spline Viewer script
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js';
        document.body.appendChild(script);
    
        return () => {
         
          document.body.removeChild(script);
        };
      }, []);

      
 

  return (
     <div>
      
      <spline-viewer
        url="https://prod.spline.design/7IV2Na5erE-6ZyNz/scene.splinecode"
        style={{ width: '100%', height: '180px' }}
      ></spline-viewer>
    </div>
  )
}

export default Pt2