import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";
import React from "react";
import { Home, Money, Info } from "@mui/icons-material";

function HeaderDrawer({ controller, state }) {
  let drawerLabelText = ["首頁", "經費表", "關於"];
  let drawerLabelIcon = [<Home />, <Money />, <Info />];
  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={controller}
      onKeyDown={controller}
    >
      <List>
        <Avatar></Avatar>
        <h1>your name</h1>
        <Divider></Divider>
        {drawerLabelText.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{drawerLabelIcon[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer anchor="left" open={state} onClose={controller}>
        {list()}
      </Drawer>
    </div>
  );
}

export default HeaderDrawer;
