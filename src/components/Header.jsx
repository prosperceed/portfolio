import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("#");

  const activeClass = () => {
    setActive(!active);
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className="py-4">
      <div className="flex justify-between items-center">
        <div className="links flex text-white ">
          <li
            className={
              splitLocation[1] === ""
                ? "px-2 list-none hover:bg-black hover:opacity-[0.3] hover:rounded-md py-2"
                : "px-2 list-none py-2"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              splitLocation[1] === "about"
                ? "px-2 list-none hover:bg-black hover:opacity-[0.3] hover:rounded-md py-2"
                : "px-2 list-none py-2"
            }
          >
            <Link to="about">About</Link>
          </li>
          <li
            className={
              splitLocation[1] === "projects"
                ? "px-2 list-none hover:bg-black hover:opacity-[0.3] hover:rounded-md py-2"
                : "px-2 list-none py-2"
            }
          >
            <Link to="projects">Projects</Link>
          </li>
          <li
            className={
              splitLocation[1] === "contact"
                ? "px-2 list-none hover:bg-black hover:opacity-[0.3] hover:rounded-md py-2"
                : "px-2 list-none py-2"
            }
          >
            <Link to="contact">Contact</Link>
          </li>
        </div>
        <h2 className="logo text-3xl text-white">Prosper</h2>
      </div>
    </div>
  );
};

export default Header;
