import React from "react";
import "../../css/pages/InfoPage.css";
import SearchService from "../../service/Search.js";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../model/reducer";

function InfoPage() {
  const [test, setTest] = useState("");

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

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
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default InfoPage;
