import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import me from "../../assets/me.jpg";
import Projects from "../Projects";

const Home = () => {
  return (
    <>
      <motion.div className="intro flex justify-between py-4">
        <div className="intro-text py-2">
          <h2 className="text-bold text-3xl uppercase text-white">
            Prosper Success
          </h2>
          <p className="text-slate text-bold py-2 text-lg text-slate-200">
            Frontend Developer
          </p>
          <p className="py-2 text-slate text-white pr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, illo.
          </p>
        </div>
        <motion.div
          className="intro-img"
          animate={{ rotate: 0 }}
          transition={{ repeat: 1, repeatDelay: 1 }}
        >
          <img src={me} alt="" className="w-[200px] h-[200px] rounded-[50%]" />
        </motion.div>
      </motion.div>
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
