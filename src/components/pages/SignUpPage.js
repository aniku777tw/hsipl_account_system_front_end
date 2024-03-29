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
import Validation from "../../method/CheckLoginSignup.js";
function SignUpPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState(false);
  const [nameHint, setNameHint] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [usernameHint, setUsernameHint] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHint, setPasswordHint] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const submitSignup = async (e) => {
    e.preventDefault();
    AuthService.signup(name, username, password, checkPassword,email,phone).then(() => {
      console.log("good");
    });
  };
  return (
    <div className="wrapper-signup">
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
                error={nameError}
                helperText={nameHint}
                onChange={(e) => {
                  setName(e.target.value);
                  Validation.checkString(
                    e.target.value,
                    setNameError,
                    setNameHint
                  );
                }}
              ></TextField>
              <TextField
                required
                label="帳號"
                placeholder="帳號"
                error={usernameError}
                value={username}
                helperText={usernameHint}
                onChange={(e) => {
                  setUsername(e.target.value);
                  Validation.checkString(
                    e.target.value,
                    setUsernameError,
                    setUsernameHint
                  );
                }}
              ></TextField>
              <TextField
                required
                label="電子信箱"
                placeholder="電子信箱"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
              <TextField
                required
                label="手機電話"
                placeholder="手機電話"
                value={phone}
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              ></TextField>
              <TextField
                required
                label="密碼"
                placeholder="密碼"
                value={password}
                error={passwordError}
                helperText={passwordHint}
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                  Validation.checkString(
                    e.target.value,
                    setPasswordError,
                    setPasswordHint
                  );
                }}
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
                error={passwordError}
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
