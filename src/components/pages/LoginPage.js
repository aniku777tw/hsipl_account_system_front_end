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
import authService from "../../service/Auth.js";
import { Link } from "react-router-dom";

function LoginPage() {
  const [username, setUseranme] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const submitLogin = async (e) => {
    e.preventDefault();
    // authService.login(username, password);
  };

  return (
    <div className="wrapper">
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
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "#1976D2" }}
            >
              <Button type="submit">登入</Button>
            </Link>
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
    </div>
  );
}

export default LoginPage;
