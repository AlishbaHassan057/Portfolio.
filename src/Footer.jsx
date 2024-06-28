import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#2B4368] mt-20 text-center">
      <div className="container mx-auto w-3/4">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-9">
          <div className="lg:w-1/2">
            <div className="contactinfo">
              <h1 className=" text-[2rem] font-bold text-white">
                Contact Information
              </h1>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="lg:my-[3rem]">
              <div className="flex items-center gap-2 my-3">
                <MdContactPhone size={30} className="text-white" />
                <a href="tel:+923331580041" className="text-white">
                  +923331580041
                </a>
              </div>
              <div className="flex items-center gap-2 my-3">
                <MdEmail size={30} className="text-white" />
                <a
                  href="mailto:alishbahassan057@gmail.com"
                  className="text-white"
                >
                  alishbahassan057@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 my-3">
                <FaGithub size={30} className="text-white" />
                <a
                  href="https://github.com/AlishbaHassan057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  https://github.com/AlishbaHassan057
                </a>
              </div>
              <div className="flex items-center gap-2 my-3">
                <FaLinkedin size={30} className="text-white" />
                <a
                  href="https://www.linkedin.com/in/alishba-hassan-846965291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  www.linkedin.com/in/alishba-hassan-846965291
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
