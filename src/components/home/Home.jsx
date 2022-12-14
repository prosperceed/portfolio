import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import me from "../../assets/me.png";
const SubProject = React.lazy(() => import("./SubProject"));

const Home = () => {
  return (
    <>
      <motion.div className="intro flex-col-reverse flex items-center md:items-start md:flex-row md:flex md:justify-between py-4">
        <div className="intro-text py-2">
          <h2 className="text-bold text-3xl uppercase text-white">
            Prosper Success
          </h2>
          <p className="text-slate text-bold py-2 text-lg text-slate-200">
            Frontend Developer
          </p>
          <p className="py-2 text-slate text-white pr-8">
            An avid developer ready to make the web comfortable, diagnose codes
            for top-notch performance!
          </p>
        </div>
        <motion.div
          className="intro-img border border-slate-600 rounded-[50%] flex-col-reverse md:flex-row flex items-center md:items-start"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <img
            src={me}
            alt=""
            className="object-cover z-10 w-[200px] h-[200px] rounded-[50%]"
          />
        </motion.div>
      </motion.div>
      <Skills />
      <Suspense
        fallback={
          <h1 className="text-2xl text-white text-center font-bold py-4">
            Loading....
          </h1>
        }
      >
        <SubProject />
      </Suspense>
    </>
  );
};

export default Home;
