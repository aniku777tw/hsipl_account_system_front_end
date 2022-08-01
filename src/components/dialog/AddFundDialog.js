import React from "react";
import {
  Button,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Stack,
  Divider,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
function AddFundDialog({ handleClose, open }) {
  const [value, setValue] = React.useState(new Date());
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">{"新增項目"}</DialogTitle>
      <DialogContent>
        <Stack
          spacing={2}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="描述"
            fullWidth
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">類別</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="類別"
              onChange={handleChange}
            >
              <MenuItem value={0}>餐費</MenuItem>
              <MenuItem value={1}>用品費</MenuItem>
              <MenuItem value={2}>入帳</MenuItem>
              <MenuItem value={3}>其他</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="收支"
            fullWidth
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="購買日期"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="支付者"
            fullWidth
            variant="outlined"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          取消
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          確定
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddFundDialog;
