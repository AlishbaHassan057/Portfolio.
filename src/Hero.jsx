import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

const Hero = () => {
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const typed = new Typed(".text", {
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

  const openCVModal = () => {
    setShowCV(true);
  };

  const closeCVModal = () => {
    setShowCV(false);
  };

  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  return (
    <section className="home flex flex-col md:flex-row items-center justify-around mt-10 md:mt-16 px-4 md:px-0 text-center md:text-left">
      <div className="home-content">
        <h4 className="text-lg md:text-xl">Hello, It's Me</h4>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">Alishba Hassan</h2>
        <h4 className="text-lg md:text-xl mt-2">
          And I'm a <span className="text"></span>
        </h4>
        <p className="mern mt-4">
          I am a freelance MERN Stack developer with one year of hands-on
          experience. <br />I specialize in frontend and backend development,
          crafting robust web applications and solutions.
          <br />
        </p>
        <div className="home-sci flex space-x-4 mt-6">
          <a
            href="https://www.facebook.com/profile.php?id=100007176166902"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://wa.me/923331580041"
            className="text-white hover:text-green-500 transition-colors"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href="https://github.com/AlishbaHassan057"
            className="text-white hover:text-gray-500 transition-colors"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alishba-hassan-846965291"
            className="text-white hover:text-blue-700 transition-colors"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <button
          className="btn-box mt-6 inline-block py-3 px-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          onClick={openCVModal}
        >
          Download CV
        </button>
      </div>

      {showCV && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute top-0 right-0 p-2 text-black"
              onClick={closeCVModal}
            >
              &times;
            </button>
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
            >
              <div style={{ height: "750px" }}>
                <Toolbar />
                <Viewer
                  fileUrl="/Miss.AlishbaHassan.pdf"
                  plugins={[toolbarPluginInstance]}
                />
              </div>
            </Worker>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
