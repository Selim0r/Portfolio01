import React from "react";
import { motion } from "framer-motion";
import selim from "../assets/selim.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.img
        src={selim}
        alt="MD. SELIM REZA"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-[150px] md:h-[200px] lg:h-[250px] w-auto object-cover rounded-lg mx-auto mb-6"
      />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-cyan-400"
      >
        Hi, I'm MD. SELIM REZA 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
      >
        A passionate Front-End Developer who loves creating modern, responsive,
        and user-friendly web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#contact"
          className="bg-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-600 transition"
        >
          Hire Me
        </a>
        <a
          href="/MD_Selim_Reza_CV.pdf"
          download="MD_Selim_Reza_CV.pdf"
          className="border border-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
