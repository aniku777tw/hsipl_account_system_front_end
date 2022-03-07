import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Stack,
} from "@mui/material";
import React from "react";
import { Home, Money, Info } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../../css/header/HeaderDrawer.css";

function HeaderDrawer({ controller, state }) {
  const drawerLabelText = ["首頁", "經費表", "關於"];
  const drawerLabelIcon = [<Home />, <Money />, <Info />];
  const drawerRedirectPath = ["/home", "/fund", "/info"];
  const drawerElement = () => (
    <Box sx={{ width: 300 }} onClick={controller} onKeyDown={controller}>
      <List>
        <div className="avatar">
          <Avatar sx={{ width: 70, height: 70 }}></Avatar>
          <label>your name</label>
        </div>
        <Divider></Divider>
        {drawerLabelText.map((text, index) => (
          <Link
            to={drawerRedirectPath[index]}
            style={{ textDecoration: "none", color: "#707070" }}
            key={text}
          >
            <ListItem button>
              <ListItemIcon>{drawerLabelIcon[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer anchor="left" open={state} onClose={controller}>
        {drawerElement()}
      </Drawer>
    </div>
  );
}

export default HeaderDrawer;
