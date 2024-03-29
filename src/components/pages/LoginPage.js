import React from "react";
import { useState,useEffect } from "react";
import {
  Paper,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  Divider,
  Typography,
  Alert,
  Fade,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "../../css/pages/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Validation from "../../method/CheckLoginSignup.js";
import AuthService from "../../service/Auth"

function LoginPage() {



  let navigate = useNavigate();

  const [username, setUseranme] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [usernameHint, setUsernameHint] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHint, setPasswordHint] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  useEffect(() => {
    if("user" in localStorage){
      navigate("/home");
    }
  });
  const submitLogin = async (e) => {
    e.preventDefault();
    AuthService.login(username, password).then(() => {
      navigate("/home");
    });
  };
  return (
    <div>
      <div className="alert">
        {alert ? (
          <Fade in={true}>
            <Alert
              severity="error"
              onClose={() => {
                setAlert(false);
              }}
            >
              login failed — check your username and password !
            </Alert>
          </Fade>
        ) : null}
      </div>

      <div className="wrapper-login">
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, duration: 0.1 }}
        >
          <Paper elevation={20}>
            <form onSubmit={submitLogin}>
              <Stack className="login-form">
                <Typography variant="h5">記帳系統登入</Typography>
                <TextField
                  required
                  autoFocus
                  error={usernameError}
                  label="帳號"
                  placeholder="帳號"
                  helperText={usernameHint}
                  value={username}
                  onChange={(e) => {
                    setUseranme(e.target.value);
                    Validation.checkString(
                      e.target.value,
                      setUsernameError,
                      setUsernameHint
                    );
                  }}
                ></TextField>
                <TextField
                  required
                  label="密碼"
                  placeholder="密碼"
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    Validation.checkString(
                      e.target.value,
                      setPasswordError,
                      setPasswordHint
                    );
                  }}
                  error={passwordError}
                  helperText={passwordHint}
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
                <Button
                  type="submit"
                  onClick={() => {
                    Validation.checkString(username,setUsernameError,
                      setUsernameHint);
                    Validation.checkString(password,setPasswordError,
                      setPasswordHint);
                    setAlert(true);
                  }}
                >
                  登入
                </Button>
                <Divider />
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
    </div>
  );
}

export default LoginPage;
