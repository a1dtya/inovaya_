import React from "react";
import { MdGroups } from "react-icons/md";
import { FaWater } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="project-wrapper py-[100px] bg-[transparent] flex flex-col justify-center items-center">
      <div className="project-info-wrapper flex justify-start flex-row it">
        <div className="projects-icon  ">
          <MdGroups />
        </div>
        <div className="projects-info ">
          <h2 className="text-black text-[47px] font-[Roboto-thin]"> 13 Projects</h2>
          <p className="text-black text-[14px] font-[Nunito-thin]">to improve access to drinking water worldwide</p>
        </div>
      </div>

      <div className="project-info-wrapper flex justify-start flex-row it">
        <div className="projects-icon  ">
          
        <FaWater />
        </div>
        <div className="projects-info ">
          <h2 className="text-black text-[47px] font-[Roboto-thin]">29 projects</h2>
          <p className="text-black text-[14px] font-[Nunito-thin]">for more sustainable water management</p>
        </div>
      </div>
    
    </div>
  );
};

export default Projects;
 