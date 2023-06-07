// components/ContactForm.js
'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      setSubmitted(true);
      setError(null); // Clear any previous errors
    } else {
      setError(data.message || "An error occurred"); // Update error state with error message
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="name"
              required
              value={formState.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
              id="message"
              name="message"
              required
              value={formState.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        {isSubmitted && (
          <AnimatePresence mode="wait">
            <motion.div
              className="bg-green-300 text-green-900 p-5 rounded-lg mb-6 text-center"
              key="success-alert"
              initial={{ opacity: 0, scale: 0.5, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -50 }}
              transition={{
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Your message was submitted successfully!
            </motion.div>
          </AnimatePresence>
        )}
        {error && (
          <AnimatePresence mode="wait">
            <motion.div
              className="bg-red-300 text-red-900 p-5 rounded-lg mb-6
              text-center"
              key="success-alert"
              initial={{ opacity: 0, scale: 0.5, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -50 }}
              transition={{
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Error: {error}
            </motion.div>
          </AnimatePresence>
        )}

        <div className="md:flex md:items-center">
          <div className="w-full flex content-center items-center justify-center">
            <button
              type="submit"
              className="relative gradient-border m-1 px-3 py-2 rounded-xl flex items-center justify-center bg-purple-700 hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
