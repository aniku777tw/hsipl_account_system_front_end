import "./App.css";
import React from "react";
import LoginForm from "./components/pages/LoginPage";
import Home from "./components/pages/HomePage";
import HeaderDrawer from "./components/HeaderDrawer";

function App() {
  return (
    <div className="App">
      {/* <LoginForm></LoginForm> */}
      {/* <Home></Home> */}
      <HeaderDrawer></HeaderDrawer>
    </div>
  );
}

export default App;
