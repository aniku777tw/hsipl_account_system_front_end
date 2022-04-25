import React from "react";
import "../../css/pages/InfoPage.css";
import SearchService from "../../service/Search.js";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@mui/material";
function InfoPage() {
  const [test, setTest] = useState("");
  return (
    <div className="wrapper-info">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 0.1 }}
      >
        <Button
          onClick={() => {
            SearchService.searchUser().then((body) => {
              setTest(body);
            });
          }}
        >
          InfoPageTest
        </Button>
        <div>{JSON.stringify(test)}</div>
      </motion.div>
    </div>
  );
}

export default InfoPage;
