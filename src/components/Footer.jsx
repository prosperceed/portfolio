import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookMessenger,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-8 border-t border-slate-700">
      <div className="socials flex gap-x-3">
        <Link>
          <FaTwitter className="text-2xl text-cyan-400" />
        </Link>
        <Link>
          <FaFacebookMessenger className="text-2xl text-purple-800" />
        </Link>
        <Link>
          <FaLinkedin className="text-2xl text-cyan-400" />
        </Link>
        <Link>
          <FaGithub className="text-2xl" />
        </Link>
      </div>
      <div>
        <p className="text-[1.2rem] text-white py-2">
          &copy; Prosper Success 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
