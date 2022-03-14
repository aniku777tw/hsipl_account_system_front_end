import React from "react";
import { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../../css/pages/SignUpPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AuthService from "../../service/Auth.js";
function SignUpPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  // TODO error handle
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const submitSignup = async (e) => {
    e.preventDefault();
    AuthService.signup(name,username, password,checkPassword).then(() => {
      console.log("good")
    });
  };
  return (
    <div className="wrapper">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 0.1 }}
      >
        <Paper elevation={20}>
          <form onSubmit={submitSignup}>
            <Stack className="sign-up-form">
              <label>記帳系統註冊</label>
              <TextField
                required
                autoFocus
                label="姓名"
                placeholder="姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
              <TextField
                required
                label="帳號"
                placeholder="帳號"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></TextField>
              <TextField
                required
                label="密碼"
                placeholder="密碼"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                required
                label="確認密碼"
                placeholder="確認密碼"
                value={checkPassword}
                type={showPassword ? "text" : "password"}
                onChange={(e) => setCheckPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <Button type="submit">註冊</Button>
              <Divider></Divider>
              <div className="login-row">
                <Button>忘記密碼?</Button>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#1976D2" }}
                >
                  <Button>登入</Button>
                </Link>
              </div>
            </Stack>
          </form>
        </Paper>
      </motion.div>
    </div>
  );
}

export default SignUpPage;
