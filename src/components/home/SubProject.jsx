import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import idaka from "../../assets/idaka.png";
import cloud from "../../assets/cloud.png";
import video from "../../assets/video.png";

const Projects = () => {
  return (
    <motion.div
      className="py-3"
      initial={{ opacity: 0.5, x: -180 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
    >
      <h2 className="text-white text-center text-2xl py-4">
        Completed Projects
      </h2>
      <div className="grid gap-y-3 md:grid-cols-1">
        <div className="flex flex-col md:flex-row md:justify-between w-full  bg-slate-700 rounded-md hover:bg-slate-600">
          <div className="px-2 py-2 flex items-center">
            <img
              src={idaka}
              alt=""
              className="cover w-full md:w-[300px] md:h-[140px] rounded-sm"
            />
          </div>
          <div className="flex gap-x-3 py-2">
            <div className="flex flex-col text-center text-slate-300 md:text-start px-1 md:px-5">
              <h3 className="text-white text-3xl">Idaka</h3>
              <p className="text-base py-5">
                Connect with friends and family across the space simple and
                easily with Idaka Chat App
              </p>
            </div>
            <a target="_blank" href="https://idaaka.netlify.app/">
              <FaExternalLinkAlt className="text-2xl text-blue-700 w-6 mx-3 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between w-full  bg-slate-700 rounded-md hover:bg-slate-600">
          <div className="px-2 py-2 flex items-center">
            <img
              src={cloud}
              alt=""
              className="cover w-full md:w-[300px] md:h-[140px] rounded-sm"
            />
          </div>
          <div className="flex gap-x-3 py-2">
            <div className="flex flex-col text-center text-slate-300 md:text-start px-1 md:px-5">
              <h3 className="text-white text-3xl">Cloud Stat</h3>
              <p className="text-base py-5">
                Wondering how to get weather condition of a place? Cloud stat
                gives you just precisely that!
              </p>
            </div>
            <a target="_blank" href="https://cloud-stat.netlify.app/">
              <FaExternalLinkAlt className="text-2xl text-blue-700 w-6 mx-3 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between w-full  bg-slate-700 rounded-md hover:bg-slate-600">
          <div className="px-2 py-2 flex items-center">
            <img
              src={video}
              alt=""
              className="cover w-full md:w-[300px] md:h-[140px] rounded-sm"
            />
          </div>
          <div className="flex gap-x-3 py-2">
            <div className="flex flex-col text-center text-slate-300 md:text-start px-1 md:px-5">
              <h3 className="text-white text-3xl">Brightmarn</h3>
              <p className="text-base py-5">
                A video content creator site for inspiring movies
              </p>
            </div>
            <a target="_blank" href="https://brightman.netlify.app/">
              <FaExternalLinkAlt className="text-2xl text-blue-700 w-6 mx-3 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-4">
        <Link
          to="projects"
          className="py-2  px-2 rounded-md bg-slate-700 hover:shadow-md hover:shadow-black text-white"
        >
          See more...
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
