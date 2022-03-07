import "./App.css";
import React from "react";
import LoginForm from "./components/pages/LoginPage";
import Home from "./components/pages/HomePage";
import SignUpPage from "./components/pages/SignUpPage";
import Header from "./components/header/Header.js";

function App() {
  return (
    <div className="App">
      {/* <SignUpPage></SignUpPage> */}
      <Header></Header>
      {/* <LoginForm></LoginForm> */}
      <Home></Home>
    </div>
  );
}

export default App;
