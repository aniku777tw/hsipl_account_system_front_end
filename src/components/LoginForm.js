import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Paper,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "../css/LoginForm.css";
import { login } from "../service/Api.js";

function LoginForm(props) {
  const errRef = useRef(); // TODO error handle

  const [username, setUseranme] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(""); // TODO error handle
  const [success, setSuccess] = useState(""); // TODO success handle

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const submitLogin = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="wrapper">
      <Paper elevation={20}>
        <form onSubmit = {submitLogin}>
          <Stack className="login-form">
            <label>記帳系統登入</label>
            <TextField
              required
              autoFocus
              label="Username"
              value={username}
              onChange={(e) => setUseranme(e.target.value)}
            ></TextField>
            <TextField
              required
              label="Password"
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
            <Button type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </Paper>
    </div>
  );
}

export default LoginForm;
