import React, { useState } from "react";
export const FileExplorer = ({ folderData }) => {
    // console.log(folderData)
    const[show,setShow]=useState(false);
    return (
        <>
            <div className="d-flex me-5">
                <h1 className="fs-4 m-1 ">{folderData.type === "Folder" ? (show?"▶":"🔺" ): "🔻"}</h1>
                <h2 className="fs-3" onClick={()=>setShow(!show)}>{folderData.name}</h2>
            </div>
         {show &&
            folderData?.children?.map((childData,index)=>{
                return(
                    <>
                    <div key={index}>
                        <span><FileExplorer folderData={childData}/></span>
                    </div>
                    </>
                )
            })
         }
        </>
    )
}