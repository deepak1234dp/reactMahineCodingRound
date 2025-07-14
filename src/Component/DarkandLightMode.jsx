// import React, { useEffect, useState } from "react";
// export const DarkandLightMode = () => {
//   const [DarkMode, setDarkMode] = useState(false);//false=>Light,True=>Dark.
//   useEffect(() => {
//     document.body.style.backgroundColor = DarkMode ? "black" : "white";
//     document.body.style.color = DarkMode ? "white" : "black";
//   }, [DarkMode])
//   return (
//     <>
//       <button onClick={() => setDarkMode(!DarkMode)}>
//         click To {DarkMode ? "DarkMode" : "LightMode"}
//       </button>
//     </>
//   )
// }


// import React from "react";
// import { useState,useEffect } from "react";
// export const DarkandLightMode = () => {
//   const [Dark, setDark] = useState(false);
//   useEffect(() => {
//     document.body.style.backgroundColor = Dark ? "black" : "white";
//     document.body.style.color = Dark ? "white" : "black";
//   }, [Dark])
//   // OR
//   // document.body.style.backgroundColor = Dark ? "black" : "white";
//   //   document.body.style.color = Dark ? "white" : "black";
//   return (
//     <>
//       <h1>ModeShow = {Dark ? "DarkMode" : "LightMode"}</h1>
//       <button onClick={() => setDark(!Dark)}>clickMode</button>
//     </>
//   )
// }


import React, { useState } from "react";
export const DarkandLightMode=()=>{
  const[Dark,setDark]=useState(false);
  document.body.style.backgroundColor=Dark?"black":"white";
  document.body.style.color=Dark?"white":"black";
  return(
    <>
    <h1>ModeShow Here={Dark?"DarkMode":"LightMode"}</h1>
    <button onClick={()=>setDark(!Dark)}>ModeClick</button>
    </>
  )
}