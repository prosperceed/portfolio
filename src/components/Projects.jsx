import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import idaka from "../assets/idaka.png";

const Projects = () => {
  return (
    <div className="py-3">
      <h2 className="text-white text-center text-2xl py-4">
        Completed Projects
      </h2>
      <div className="grid gap-y-3 md:grid-cols-1">
        <div className="flex  justify-between w-full h-40 bg-slate-700 rounded-md hover:bg-slate-600">
          <div className="px-2 flex items-center">
            <img
              src={idaka}
              alt=""
              className="cover w-[300px] h-[140px] rounded-sm"
            />
          </div>
          <div className="flex gap-x-3 py-2">
            <div className="flex flex-col px-5">
              <h3 className="text-white text-2xl">Idaka</h3>
              <p className="text-base py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
            <a target="_blank" href="https://www.google.com">
              <FaExternalLinkAlt className="text-3xl text-blue-700 w-6 mx-3 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex  justify-between w-full h-40 bg-slate-700 rounded-md hover:bg-slate-600">
          <div className="px-2 flex items-center">
            <img
              src={idaka}
              alt=""
              className="cover w-[300px] h-[140px] rounded-sm"
            />
          </div>
          <div className="flex gap-x-3 py-2">
            <div className="flex flex-col px-5">
              <h3 className="text-white text-2xl">Idaka</h3>
              <p className="text-base py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
            <a target="_blank" href="https://www.google.com">
              <FaExternalLinkAlt className="text-3xl text-blue-700 w-6 mx-3 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
