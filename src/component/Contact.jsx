import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "selimreza", // EmailJS Service ID
        "template_hhmg85s", // EmailJS Template ID
        form.current,
        "epyntoyNDOEqoE0Xa" // EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-60vh flex flex-col justify-center items-center px-6 md:mb-[100px]"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-cyan-400 mb-8"
      >
        Contact Me
      </motion.h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-cyan-400"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-cyan-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-cyan-400"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-500 py-3 rounded hover:bg-cyan-600 transition"
        >
          Send Message
        </button>
      </form>

      {done && (
        <p className="mt-4 text-green-400">Message sent successfully! ✅</p>
      )}
    </section>
  );
};

export default Contact;
