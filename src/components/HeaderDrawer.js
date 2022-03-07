import {
  Drawer,
  Box,
} from "@mui/material";
import React from "react";

function HeaderDrawer({controller,state}) {

  const list = (anchor) => (
      
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={controller}
      onKeyDown={controller}
    ></Box>
  );
  return (
    
    <div>
      <Drawer anchor="left" open={state} onClose={controller}>
        {list("left")}
      </Drawer>
    </div>
  );
}

export default HeaderDrawer;
