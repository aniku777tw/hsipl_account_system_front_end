import React from "react";
import "../../css/pages/FundPage.css";
import {
  IconButton,
  Paper,
  Divider,
  InputBase,
  Button,
  Stack,
} from "@mui/material";
import { Search, Add } from "@mui/icons-material";
import { motion } from "framer-motion";
import AddFundDialog from "../dialog/AddFundDialog";
import FundTable from "../table/FundTable";

function FundPage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, duration: 0.1 }}
    >
      <div className="wrapper-fund">
        <Stack spacing={2}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              minWidth: 360,
              maxHeight: 200,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search " }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Button startIcon={<Add />} onClick={handleClickOpen}>
              新增
            </Button>
          </Paper>
          <AddFundDialog open={open} handleClose={handleClose} />
          <FundTable />
        </Stack>
      </div>
    </motion.div>
  );
}

export default FundPage;
