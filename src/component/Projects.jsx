import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React and Tailwind.",
  },
  {
    title: "E-commerce App",
    desc: "Full responsive store with cart & filter features.",
  },
  {
    title: "Weather App",
    desc: "Real-time weather app using open weather API.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-cyan-400 mb-8"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
