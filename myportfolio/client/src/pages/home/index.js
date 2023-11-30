import React from "react";
import About from "../about";
import Experience from "../exprience";
import Project from "../project";
import "./style.css";


function Home() {
  return (
    <div>
      <About/>
      <Experience type={true}/>
      <Project type={true}/>      
    </div>
  );
}

export default Home;
