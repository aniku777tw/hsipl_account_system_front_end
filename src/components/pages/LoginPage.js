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

import "../../css/pages/LoginPage.css";
import AuthService from "../../service/Auth.js";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LoginPage() {
  let navigate = useNavigate();
  const [username, setUseranme] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const submitLogin = async (e) => {
    e.preventDefault();
    AuthService.login(username, password).then(() => {
      navigate("/home");
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
          <form onSubmit={submitLogin}>
            <Stack className="login-form">
              <label>記帳系統登入</label>
              <TextField
                required
                autoFocus
                label="帳號"
                placeholder="帳號"
                value={username}
                onChange={(e) => setUseranme(e.target.value)}
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
              {/* <Link
              to="/home"
              style={{ textDecoration: "none", color: "#1976D2" }}
            > */}
              <Button type="submit">登入</Button>
              {/* </Link> */}
              <Divider></Divider>
              <div className="sign-up-row">
                <Button>忘記密碼?</Button>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "#1976D2" }}
                >
                  <Button>註冊</Button>
                </Link>
              </div>
            </Stack>
          </form>
        </Paper>
      </motion.div>
    </div>
  );
}

export default LoginPage;
