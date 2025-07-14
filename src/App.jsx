// import { DarkandLightMode } from "./Component/DarkandLightMode";
// import { Loader } from "./Component/Loader";
// import { ProgressBar } from "./Component/ProgressBar";
// import SearchBox from "./Component/SearchBox";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Accordion } from "./Component/Accordion/Accordion";
import { FileExplorer } from "./Component/FileExplorer";
import { ModalBox } from './Component/ModalBox';
import { InfinityScrolling } from './Component/InfinityScrolling';
import { DarkandLightMode } from './Component/DarkandLightMode';
import SearchBox from './Component/SearchBox';
import { Loader } from './Component/Loader';


// import { InfinityScrolling } from "./Component/InfinityScrolling";
// import data from "../data.json";

// import { Modal } from "bootstrap";


function App(){
  
  return(
    <>
     <ModalBox/>
     <ModalBox buttonText={"sign In"} content={ "happy to see you again "} ></ModalBox>
          <ModalBox buttonText={'happy Birthday '} content={"Happy Birthday to you " } showCloseBtn ={false}></ModalBox>

    
    {/* <FileExplorer folderData={data}/> */}
    {/* <DarkandLightMode/> */}
    {/* < SearchBox/> */}
    <Loader/>
    {/* <InfinityScrolling/> */}
    {/* <ProgressBar/> */}

     {/* <div style={{ padding: "20px" }}>
      <h2>Simple Accordion Example</h2>
      <Accordion title="Click to Expand" content="This is the content inside the accordion." />
      <Accordion title="Section 1" content="Content for section 1" />
      <Accordion title="Section 2" content="Content for section 2" />
      <Accordion title="What is React" content="React is a js Library.it is used for SPA"/>
      <Accordion title="What is Redux" content="React is a js Library.it is used for SPA"/>
    </div> */}
    </>
  )
}
export default App;