import React from "react";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto w-3/4  mt-20">
      <h2 className="text-[#00eeff] font-bold text-[2.2rem] text-left">
        About Me
      </h2>
      <h4 className="font-bold text-[1.6rem] text-left">
        MERN Stack Developer!
      </h4>
      <div className="flex flex-wrap">
        <div className="lg:w-[70%] mb-2 mt-2 text-justify">
          <div className="bg-[#0c1337] text-white  border-white border-2 transform transition-transform duration-300 hover:translate-y-[-5px] hover:bg-[#2b4368] cursor-pointer py-3">
            <div className="flex flex-row items-center gap-5 p-3">
              <div className="icons">
                <FaCode size={40} />
              </div>
              <div>
                <div>
                  <h3 className="text-[2rem] text-left">Frontend Developer</h3>
                </div>
                <div className="text-justify">
                  As a skilled developer, I specialize in crafting responsive
                  and optimized websites using a wide range of technologies
                  including HTML, CSS, Bootstrap, Tailwind CSS, React, and
                  JavaScript.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[70%] mb-2 mt-2">
          <div className="bg-[#0c1337] text-white  border-2 border-white transform transition-transform duration-300 hover:translate-y-[-5px] hover:bg-[#2b4368] cursor-pointer py-3">
            <div className="flex flex-row items-center gap-5 p-3">
              <div className="icons">
                <FaServer size={40} />
              </div>
              <div>
                <div>
                  <h3 className="text-[2rem] text-left">Backend Developer</h3>
                </div>
                <div className="text-justify">
                  With a focus on backend development, I have expertise in
                  building fast and efficient server-side applications and APIs
                  using technologies such as Node.js, Express, MongoDB, PHP, and
                  Laravel.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[70%] mb-2 mt-2">
          <div className="bg-[#0c1337] text-white  border-2 border-white transform transition-transform duration-300 hover:translate-y-[-5px] hover:bg-[#2b4368] cursor-pointer py-3">
            <div className="flex flex-row items-center gap-5 p-3">
              <div className="icons">
                <FaLaptopCode size={40} />
              </div>
              <div>
                <div>
                  <h3 className="text-[2rem] text-left">
                    MERN Stack Developer
                  </h3>
                </div>
                <div className="text-justify">
                  I am proficient in the MERN stack, enabling me to create
                  comprehensive solutions that seamlessly integrate frontend and
                  backend technologies, ensuring exceptional user experiences
                  and streamlined server operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
