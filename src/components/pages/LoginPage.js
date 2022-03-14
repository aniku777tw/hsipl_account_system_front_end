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
  Typography,
  Alert,
  Fade ,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "../../css/pages/LoginPage.css";
import AuthService from "../../service/Auth.js";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LoginPage() {
  let navigate = useNavigate();
  const [username, setUseranme] = useState("");
  const [usernameCheck, setUsernameCheck] = useState(false);
  const [usernameHint, setUsernameHint] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordHint, setPasswordHint] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const submitLogin = async (e) => {
    e.preventDefault();
    AuthService.login(username, password).then(() => {
      navigate("/home");
    });
  };

  const checkUser = (user) => {
    if (user === "") {
      setUsernameCheck(true);
      setUsernameHint("不能為空");
    } else {
      setUsernameCheck(false);
      setUsernameHint("");
    }
  };

  const checkPassword = (password) => {
    if (password === "") {
      setPasswordCheck(true);
      setPasswordHint("不能為空");
    } else {
      setPasswordCheck(false);
      setPasswordHint("");
    }
  };

  return (
    <div>
    
    <div className='alert'>
      {alert ? (
        <Fade in={true}  >
        <Alert
          severity="error"
          onClose={() => {
            setAlert(false);
          }}
        >
          This is a erorr alert — check it out!
        </Alert>
        </Fade>
      ) : null}
    </div>
    
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
                <Typography variant="h5">記帳系統登入</Typography>
                <TextField
                  required
                  autoFocus
                  error={usernameCheck}
                  label="帳號"
                  placeholder="帳號"
                  helperText={usernameHint}
                  value={username}
                  onChange={(e) => {
                    setUseranme(e.target.value);
                    checkUser(e.target.value);
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
                    checkPassword(e.target.value);
                  }}
                  error={passwordCheck}
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
                    checkUser(username);
                    checkPassword(password);
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
