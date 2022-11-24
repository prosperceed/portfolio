import React from "react";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiReact, SiFirebase } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h2 className="text-2xl text-slate-200 py-4 ml-7">My skills</h2>
      <motion.div
        className="flex justify-around"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="gap-y-8">
          <TbBrandJavascript className="icons w-20 h-20 font-8xl text-yellow-300" />
          <IoLogoCss3 className="icons w-20 h-20 font-8xl text-blue-400" />
          <SiTailwindcss className="icons w-20 h-20 font-8xl text-blue-400" />
          <AiFillHtml5 className="icons w-20 h-20 font-8xl text-yellow-500" />
          <SiReact className="icons w-20 h-20 font-8xl text-blue-700" />
          <SiFirebase className="icons w-20 h-20 font-8xl text-yellow-300" />
        </div>

        <div className="percent flex flex-col gap-y-12">
          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 w-[85%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              85%
            </div>
          </div>

          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 w-[98%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              98%
            </div>
          </div>

          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 w-[92%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              92%
            </div>
          </div>

          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 w-[95%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              95%
            </div>
          </div>

          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 w-[90%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              90%
            </div>
          </div>

          <div className="w-[16rem] md:w-[20rem] bg-gray-200 mt-5 rounded-full dark:bg-gray-700">
            <div className="bg-yellow-600 w-[70%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
              {" "}
              70%
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
