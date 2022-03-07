import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
import HeaderDrawer from "./HeaderDrawer.js";
import "../../css/header/Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [drawerState, setDrawerState] = useState(false);
  function drawerController(event) {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(!drawerState);
  }
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname == "/login" || location.pathname == "/signup") {
    return null;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderDrawer
        state={drawerState}
        controller={drawerController}
      ></HeaderDrawer>
      <AppBar
        className="nav"
        position="absolute"
        elevation={5}
        style={{ background: "#FFFFFF" }}
      >
        <Toolbar className="toolbar">
          <IconButton
            onClick={drawerController}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu style={{ color: "#1976D2" }} />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1, color: "#1976D2" }}>
            記帳系統
          </Typography>
          <Link
                to="/login"
                style={{ textDecoration: "none", color: "#1976D2" }}
              >
                <Button>登出</Button>
              </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
