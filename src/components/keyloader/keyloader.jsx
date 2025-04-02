import React from "react";
import { motion } from "framer-motion";
import "../../../src/index.css"; // Ensure path is correct
import pinHole from "./pin-hole.png"; // Keyhole image
const KeyholeLoader = () => {
  return (
    <motion.div
    className="keyhole-loader"
    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
  >
    <img src={pinHole} alt="Loading" className="keyhole-icon" />
  </motion.div>
  );
};

export default KeyholeLoader;