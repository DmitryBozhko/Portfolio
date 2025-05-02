import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!status) return;
    const id = setTimeout(() => setStatus(null), 1500);
    return () => clearTimeout(id);
  }, [status]);

  const handleChange = (e) =>
    setFormData((fd) => ({ ...fd, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("https://formspree.io/f/myzweypr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (_) {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.section
      className="min-h-screen p-8 bg-dark-bg text-gray-300 flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="mb-1 text-sm">Name</span>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full p-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-ocean-blue"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span className="mb-1 text-sm">Email</span>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full p-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-ocean-blue"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="block">
            <span className="mb-1 text-sm">Message</span>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-ocean-blue"
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-ocean-blue text-dark-bg font-semibold px-4 py-2 rounded hover:opacity-90 disabled:opacity-50"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>

          <AnimatePresence>
            {status && (
              <motion.div
                key="status"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 rounded px-4 py-2 text-sm ${
                  status === "success"
                    ? "bg-green-500/20 text-green-300 border border-green-500/40"
                    : "bg-red-500/20 text-red-300 border border-red-500/40"
                }`}
              >
                {status === "success"
                  ? "Message sent successfully! I’ll get back to you soon."
                  : "Something went wrong. Please try again later."}
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <div className="mt-8 text-center">
          <p>Or find me on:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/DmitryBozhko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/github.png" alt="GitHub" className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/dmitry-bozhko-78b79731b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
