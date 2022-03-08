import React from "react";
import logo from "../../logo.png";
import "../../css/pages/HomePage.css";
import { motion } from "framer-motion";


function HomePage() {
  return (
    <div className="wrapper">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 0.1 }}
      >
        <img className="logo" src={logo} alt="Logo"></img>
      </motion.div>
    </div>
  );
}

export default HomePage;
