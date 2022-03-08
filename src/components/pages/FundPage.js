import React from "react";
import "../../css/pages/FundPage.css";

import { motion } from "framer-motion";

function FundPage() {
  return (
    <div className="wrapper">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 0.1 }}
      >
        <div>InfoPage</div>
      </motion.div>
    </div>
  );
}

export default FundPage;
