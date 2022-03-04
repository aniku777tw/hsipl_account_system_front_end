import React from "react";
import { useState, useEffect, useRef } from "react";
import { Paper, TextField, Button, Stack } from "@mui/material";
import "../css/LoginForm.css";

function LoginForm(props) {
  const userRef = useRef(null);
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (null !== userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  return (
    <div className="wrapper">
      <Paper elevation={20}>
        <Stack className="login-form">
          <label>記帳系統登入</label>
          <TextField label='Username'></TextField>
          <TextField label='Password'></TextField>
          <Button>Login</Button>
        </Stack>
      </Paper>
    </div>
  );
}

export default LoginForm;
