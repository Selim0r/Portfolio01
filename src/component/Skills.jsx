import React from "react";
import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-cyan-400 mb-8"
      >
        My Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 py-4 px-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
