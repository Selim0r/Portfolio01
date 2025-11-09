import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React and Tailwind.",
    link: "portfolio01-rosy-eight.vercel.app",
  },
  {
    title: "Movie Website",
    desc: "Full responsive movie site & filter categorys.",
    link: "https://dramatic-move-website.vercel.app/",
  },
  {
    title: "E-Commers Website",
    desc: "E-Commers Website using html and tailwind css.",
    link: "https://github.com/Selim0r/E-Commers-1",
  },
  {
    title: "Medical Health Care Website",
    desc: "Medical Health Care Website using html and tailwind css.",
    link: "https://github.com/Selim0r/-medical-helthcare",
  },
  {
    title: "E-Commers Website",
    desc: "E-Commers Website using html and tailwind css.",
    link: "https://github.com/Selim0r/Desital-E-comers",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-60vh flex flex-col justify-center items-center px-6 py-10 md:mb-[100px]"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-cyan-400 mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-6xl">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition cursor-pointer flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.desc}</p>
            </div>
            <span className="text-cyan-400 mt-4 text-sm font-medium">
              🔗 View Project
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
