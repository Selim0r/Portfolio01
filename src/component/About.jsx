import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-cyan-400 mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 max-w-2xl text-center leading-relaxed"
      >
        I'm a dedicated web developer with strong experience in React, Tailwind,
        and modern front-end tools. I love turning creative ideas into
        functional and elegant user interfaces that provide great user
        experiences.
      </motion.p>
    </section>
  );
};

export default About;
