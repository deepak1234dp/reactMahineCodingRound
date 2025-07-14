// import React, { useState, useEffect } from "react";

// export const ProgressBar = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress(prev => (prev < 100 ? prev + 5 : 100));
//     }, 500);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div style={{ width: "500px", border: "1px solid #000", borderRadius: "10px", overflow: "hidden" }}>
//       <div
//         style={{
//           width: `${progress}%`,
//           height: "40px",
//           background: "green",
//           transition: "width 0.5s"
//         }}
//       />
//       <p style={{ textAlign: "center", marginTop: "5px" }}>{progress}%</p>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>(prev<100)?prev+5:100)
    
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div
      className="Container"
      style={{
        position: "relative",
        width: "500px",
        height: "30px",
        borderRadius: "20px",
        border: "2px solid black",
        overflow: "hidden",
    
      }}
    >
      <div
        className="Progress"
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "lightgreen",
          transition: "width 0.5s ease-in-out"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold"
        }}
      >
        {progress}%
      </div>
    </div>
    </>
  );
};


    