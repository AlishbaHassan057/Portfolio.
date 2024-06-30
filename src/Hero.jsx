import React, { useEffect } from "react";
import Typed from "typed.js";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    var typed = new Typed(".text", {
      strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-around md:flex-row">
      <div className="text-center md:text-left lg:text-left mt-[15rem]">
        <h4 className=" text-[1.7rem] ">Hello, It's Me</h4>
        <h2 className="text-[4rem] mt-[-1rem]">Alishba Hassan</h2>
        <h4 className="text-[2rem] mt-[-1rem]">
          And I'm a <span className="text"></span>
        </h4>
        <p className="mt-2 md:text-lg lg:text-xl lg:mt-[0rem] lg:w-[70%]">
          I am a freelance MERN Stack developer with one year of hands-on
          experience. <br />I specialize in frontend and backend development,
          crafting robust web applications and solutions.
          <br />
        </p>
        <div className="flex justify-center md:justify-start mt-2 mb-2 space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100007176166902"
            className="text-blue-600"
            style={{ "--i": 6 }}
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://wa.me/923331580041"
            className="text-green-500"
            style={{ "--i": 7 }}
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          <a
            href="https://github.com/AlishbaHassan057"
            className="text-black"
            style={{ "--i": 8 }}
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/alishba-hassan-846965291"
            className="text-blue-700"
            style={{ "--i": 9 }}
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
        <a
          href="#"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={() => alert("Download CV clicked")}
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
