import "./App.css";
import React from "react";
import LoginForm from "./components/pages/LoginPage";
import Home from "./components/pages/HomePage";
import HeaderDrawer from "./components/HeaderDrawer";
import SignUpPage from "./components/pages/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* <LoginForm></LoginForm> */}
      <SignUpPage></SignUpPage>
      {/* <Home></Home> */}
      {/* <HeaderDrawer></HeaderDrawer> */}
    </div>
  );
}

export default App;
