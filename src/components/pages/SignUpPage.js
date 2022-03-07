import React from 'react'
import { useState, useEffect, useRef } from "react";
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
import "../../css/SignUpPage.css";
function SignUpPage() {
    const [username, setUseranme] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [errMsg, setErrMsg] = useState(""); // TODO error handle
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    useEffect(() => {
        setErrMsg("");
      }, [username, password]);
    
      
  return (
    <div className="wrapper">
      <Paper elevation={20}>
        <form >
          <Stack className="sign-up-form">
            <label>記帳系統註冊</label>
            <TextField
              required
              // autoFocus
              label="帳號"
              placeholder = "帳號"
              value={username}
              onChange={(e) => setUseranme(e.target.value)}
            ></TextField>
            <TextField
              required
              label="密碼"
              placeholder = "密碼"
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
              placeholder = "確認密碼"
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
            <Button >忘記密碼?</Button>
            <Button >登入</Button>
            </div>
            
          </Stack>
        </form>
      </Paper>
    </div>
  )
}

export default SignUpPage