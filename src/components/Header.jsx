import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AiOutlineClose, AiFillCode } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: "0" },
  closed: { opacity: 0, x: "-200%" },
  transition: { duration: 4 },
};
const Header = () => {
  const [open, setOpen] = useState(false);

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className="py-4">
      <div className="flex justify-between items-center">
        <div className="links hidden md:flex text-white ">
          <motion.li
            className={
              splitLocation[1] === ""
                ? "px-2 mx-2 list-none bg-black opacity-[0.3] rounded-md py-2"
                : "px-2 list-none py-2 hover:bg-black hover:opacity-[0.3] hover:rounded-md"
            }
            initial={{ opacity: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 0.3 }}
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            className={
              splitLocation[1] === "about"
                ? "px-2 mx-2 list-none bg-black opacity-[0.3] rounded-md py-2"
                : "px-2 list-none py-2  hover:bg-black hover:opacity-[0.3] rounded-md"
            }
            initial={{ opacity: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 0.3 }}
          >
            <Link to="about">About</Link>
          </motion.li>
          <motion.li
            className={
              splitLocation[1] === "projects"
                ? "px-2 mx-2 list-none bg-black opacity-[0.3] rounded-md py-2"
                : "px-2 list-none py-2 hover:bg-black hover:opacity-[0.3] rounded-md"
            }
            initial={{ opacity: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 0.3 }}
          >
            <Link to="projects">Projects</Link>
          </motion.li>
          <motion.li
            className={
              splitLocation[1] === "contact"
                ? "px-2 mx-2 list-none bg-black opacity-[0.3] rounded-md py-2"
                : "px-2 list-none py-2 hover:bg-black hover:opacity-[0.3] rounded-md"
            }
            initial={{ opacity: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 0.3 }}
          >
            <Link to="contact">Contact</Link>
          </motion.li>
        </div>
        <h2 className="hidden md:flex logo text-3xl text-white">
          <AiFillCode className="text-6xl w-14 text-blue-500" />
        </h2>

        <motion.div className="md:hidden ">
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            {!open ? (
              <GiHamburgerMenu className="w-8 text-2xl text-white my-2" />
            ) : (
              <AiOutlineClose className="w-8 text-2xl text-white my-2" />
            )}
          </div>
          <motion.div
            className={
              !open
                ? "hidden"
                : "visible drop-shadow-md shadow-md shadow-black -ml-[2rem] flex flex-col p-3 bg-slate-500 rounded-md opacity-[0.9]"
            }
            animate={!open ? "closed" : "open"}
            variants={variants}
            whileInView={{
              transition: { duration: 2 },
            }}
          >
            <motion.li
              className={
                splitLocation[1] === ""
                  ? "px-2 my-2 list-none text-white bg-black opacity-[0.3] rounded-md py-2"
                  : "px-2 list-none text-white py-2 hover:bg-black hover:opacity-[0.3] hover:rounded-md"
              }
            >
              <Link to="/">Home</Link>
            </motion.li>
            <li
              className={
                splitLocation[1] === "about"
                  ? "px-2 my-2 list-none text-white bg-black opacity-[0.3] rounded-md py-2"
                  : "px-2 list-none text-white py-2  hover:bg-black hover:opacity-[0.3] rounded-md"
              }
            >
              <Link to="about">About</Link>
            </li>
            <li
              className={
                splitLocation[1] === "projects"
                  ? "px-2 my-2 list-none text-white bg-black opacity-[0.3] rounded-md py-2"
                  : "px-2 list-none text-white py-2 hover:bg-black hover:opacity-[0.3] rounded-md"
              }
            >
              <Link to="projects">Projects</Link>
            </li>
            <li
              className={
                splitLocation[1] === "contact"
                  ? "px-2 my-2 list-none text-white bg-black opacity-[0.3] rounded-md py-2"
                  : "px-2 list-none text-white py-2 hover:bg-black hover:opacity-[0.3] rounded-md"
              }
            >
              <Link to="contact">Contact</Link>
            </li>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
