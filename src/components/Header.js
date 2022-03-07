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
import toggleDrawer from "./HeaderDrawer.js";
import HeaderDrawer from "./HeaderDrawer.js";

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <HeaderDrawer
          state={drawerState}
          controller={drawerController}
        ></HeaderDrawer>
        <Toolbar>
          <IconButton
            onClick={drawerController}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CurrentPage
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
