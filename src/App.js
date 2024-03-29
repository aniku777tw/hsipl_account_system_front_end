import "./App.css";
import React from "react";
import LoginPage from "./components/pages/LoginPage";
import Home from "./components/pages/HomePage";
import SignUpPage from "./components/pages/SignUpPage";
import Header from "./components/header/Header.js";
import FundPage from "./components/pages/FundPage";
import InfoPage from "./components/pages/InfoPage";
import WebContentPage from "./components/pages/WebContentPage";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoutes from "./router/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Home />} />
              <Route path="/web" element={<WebContentPage />} />
              <Route path="/fund" element={<FundPage />} />
              <Route path="/info" element={<InfoPage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
