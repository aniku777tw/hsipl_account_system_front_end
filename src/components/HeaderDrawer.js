import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { Mail, Inbox } from "@mui/icons-material/";
import React from "react";

function HeaderDrawer(props) {
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >

    </Box>
  );
  return (
    <div>
      <Button onClick={toggleDrawer()}>'left'</Button>
      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer()}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}

export default HeaderDrawer;
