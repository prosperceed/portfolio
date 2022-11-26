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
        <a target="_blank" href="https://twitter.com/kucozwa">
          <FaTwitter className="text-2xl text-cyan-400" />
        </a>
        <a target="_blank" href="https://web.facebook.com/prosper.succx/">
          <FaFacebookMessenger className="text-2xl text-purple-800" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/prosper-kucozwa-success-2841b9216/"
        >
          <FaLinkedin className="text-2xl text-cyan-400" />
        </a>
        <a target="_blank" href="https://github.com/prosperceed">
          <FaGithub className="text-2xl" />
        </a>
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
