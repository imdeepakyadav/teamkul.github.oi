"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="countdown"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {Object.keys(timeLeft).length > 0 ? (
        <div className="countdown-units">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              className="countdown-unit"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="number">{value}</span>
              <span className="label">{unit}</span>
            </motion.div>
          ))}
        </div>
      ) : (
        <p>We have launched!</p>
      )}
    </motion.div>
  );
}
