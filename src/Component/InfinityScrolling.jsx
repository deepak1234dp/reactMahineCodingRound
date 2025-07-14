// // import React, { useEffect, useState } from "react";

// // const InfinityScrolling = () => {
// //   const [data, setData] = useState([]);
// //   const [count, setCount] = useState(1);

// //   // Fetch data
// //   const fetchData = async () => {
// //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${count}`);
// //     const newData = await res.json();
// //     setData((prev) => [...prev, ...newData]);
// //   };

// //   // Initial + on page change
// //   useEffect(() => {
// //     fetchData();
// //   }, [count]);

// //   // Scroll listener
// //   useEffect(() => {
// //     const handleScroll = (event) => {
// // const res=event.target;
// // console.log(res)
// //     //   if (
// //     //     window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
// //     //   ) {
// //     //     setCount((prev) => prev + 1);
// //     //   }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <div>
// //       {data.map((item) => (
// //         <div key={item.id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
// //           {item.title}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default InfinityScrolling;


// // import React, { useState } from "react";

// // const THRESHOLD = 20;

// // export const InfinityScrolling = () => {
// //   const [data, setData] = useState([...Array(40).keys()]); // initial data as 0–39
// //   const [loading, setLoading] = useState(false);

// //   const handleScroll = (event) => {
// //     const { scrollTop, clientHeight, scrollHeight } = event.target;
// //     const remainingScroll = scrollHeight - (scrollTop + clientHeight);

// //     if (remainingScroll < THRESHOLD && !loading) {
// //       loadMore();
// //     }
// //   };

// //   const loadMore = () => {
// //     setLoading(true);
// //     setTimeout(() => {
// //       setData((prev) => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i)]);
// //       setLoading(false);
// //     }, 1000);
// //   };

// //   return (
// //     <div
// //       onScroll={handleScroll}
// //       style={{ height: "400px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}
// //     >
// //       {data.map((item, index) => (
// //         <div key={index} style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
// //           Item #{item + 1}
// //         </div>
// //       ))}

// //       {loading && <div style={{ padding: "10px" }}>Loading...</div>}
// //     </div>
// //   );
// // };


// // import React from "react";
// // import { useState } from "react";

// // const THRESHOLD=20;
// // export const InfinityScrolling=()=>{
// //   const[data,setData]=useState([...Array.from({length:30},(_,i)=>i)]);
// //   const[loading,setLoading]=useState(false)


// //   const handleScroll=(event)=>{
// //     const scrollTop=event.target.scrollTop;
// //     const clientHeight=event.target.clientHeight;
// //     const scrollHeight=event.target.scrollHeight;
// //     const remainingScroll= scrollHeight-(scrollTop+clientHeight);
// //     if(remainingScroll<THRESHOLD &&!loading){
// //       loadMore();
// //     }
// //   }
// //   const loadMore=()=>{
// //     setLoading(true)
// //     setTimeout(()=>{
// //       setData((prev) => [...prev, ...Array.from({ length:20 }, (_, i) => prev.length+i)]);
// //      setLoading(false)
// //     },1000)
// //   }
// //   return(
// //     <>
// //     <div onScroll={handleScroll} style={{height:"400px", overflowY:"auto",border:"2px solid red",padding:"8px"}}>
// //       {
// //         data.map((item,index)=>(
// //           <div key={index} style={{padding:"8px",color:"green"}}>
// //             Item #{item+1}
// //           </div>
// //         ))
// //       }
// //       {loading && <div style={{color:"blue"}}>Loading...</div>}
// //     </div>
// //     </>
// //   )
// // }

// import React, { useState } from 'react';

// export const InfinityScrolling = () => {
//   const [state, setState] = useState([...Array.from({ length: 30 }, (_, i) => i)]);
//   const [loading, setLoading] = useState(false);
//   const THRESHOLD = 20;

//   function handleScroll(event) {
//     const scrollTop = event.target.scrollTop;
//     const clientHeight = event.target.clientHeight;
//     const scrollHeight = event.target.scrollHeight;
//     const remainingScroll = scrollHeight - (scrollTop + clientHeight);

//     if (remainingScroll < THRESHOLD && !loading) {
//       loadmore();
//     }
//   }
//   function loadmore() {
//     setLoading(true);
//     setTimeout(() => {
//       setState((pre) => [...pre, ...Array.from({ length: 10 }, (_, i) => pre.length + i)])
//       setLoading(false)
//     }, 1000)
//   }
//   return (
//     <>
//       <div onScroll={handleScroll} style={{ height: "400px", overflowY: "auto", padding: "8px" ,border:"2px solid blue"}}>
//         {
//           state.map((item, index) => {
//             return (
//               <div key={index} style={{ padding: "8px", color: "red" }}>
//                 Item:{item + 1}
//               </div>
//             )
//           })
//         }
//         {loading && <div style={{ color: "green" }}>Loading...</div>}
//       </div>
//     </>
//   )
// }


import React, { useState } from "react";
export const InfinityScrolling = () => {
  const [state, setState] = useState([...Array.from({ length: 40 }, (_, i) => i)]);
  const [loading, setLoading] = useState(false);

  let ThresHold = 20;

  const handleScroll = (event) => {
    let scrollTop = event.target.scrollTop;
    let clientHeight = event.target.clientHeight;
    let scrollHeight = event.target.scrollHeight;
    let remainingScroll = scrollHeight - (scrollTop + clientHeight);

    if (remainingScroll < ThresHold && !loading) {
      addMore();
    }
  }


  const addMore = () => {
    setLoading(true);
    setTimeout(() => {
      setState((prev) => ([...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i)]))
       setLoading(false)
    }, 1000)
   
  }
  return (
    <>
      <div onScroll={handleScroll} style={{ maxHeight: "400px", overflowY: "auto", padding: "8px", border: "2px solid red" }}>
        <h1>Infinity Scrolling</h1>
        {
          state.map((item, index) => (
            <>
              <tr key={index}>
                <td>Item:{item + 1}</td>
              </tr>

            </>
          ))
        }
        {loading && <div style={{ color: "green" }}>Loading...</div>}
      </div>

    </>
  )
}