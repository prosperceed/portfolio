import React from "react";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiReact } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

const Skills = () => {
  return (
    <>
      <h2 className="text-2xl text-slate-200 py-4 ml-7">My skills</h2>
      <div className="flex justify-around">
        <div className="gap-y-8">
          <TbBrandJavascript className="icons w-20 h-20 font-8xl text-yellow-300" />
          <IoLogoCss3 className="icons w-20 h-20 font-8xl text-blue-400" />
          <SiTailwindcss className="icons w-20 h-20 font-8xl text-blue-400" />
          <AiFillHtml5 className="icons w-20 h-20 font-8xl text-yellow-500" />
          <SiReact className="icons w-20 h-20 font-8xl text-blue-700" />
        </div>

        <div className="percent flex flex-col gap-y-12">
          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 w-[90%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              90%
            </div>
          </div>

          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 w-[90%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              45%
            </div>
          </div>

          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 w-[90%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              45%
            </div>
          </div>

          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 w-[90%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              45%
            </div>
          </div>

          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 w-[90%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              45%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
