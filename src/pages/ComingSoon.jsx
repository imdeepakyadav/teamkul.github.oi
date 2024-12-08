"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountdownTimer from "../components/countdown-timer";
import SocialLinks from "../components/social-links";
// import BackgroundPattern from './components/background-pattern'
import "../styles/styles.css";

export default function ComingSoon() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="coming-soon-container">
      {/* <BackgroundPattern /> */}
      <video autoPlay muted loop className="video-background">
        <source src="/background.mp4" type="video/mp4" />
        {/* Fallback message for unsupported browsers */}
        Your browser does not support the video tag.
      </video>

      <motion.div
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="header">
          <motion.img
            src="/white-logo.png"
            alt="Teamkul"
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <SocialLinks />
        </header>

        <main className="main-content">
          <motion.div
            className="coming-soon-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Coming Soon
          </motion.div>

          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            We are revolutionizing the way we recruit, work, and get paid
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Be the first to know when we launch
          </motion.p>

          <CountdownTimer targetDate="2025-01-01" />

          <motion.form
            className="signup-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="email-submit">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </div>
          </motion.form>

          {/* <motion.div
            className="products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <h2>Teamkul products:</h2>
            <div className="product-logos">
              <img src="/Teamkul-hrm.svg" alt="Teamkul HRM" />
              <img src="/Teamkul-talent.svg" alt="Teamkul Talent" />
            </div>
          </motion.div> */}
        </main>
      </motion.div>
    </div>
  );
}
