import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TablePagination,
  TableContainer,
} from "@mui/material";
import { Delete, Update } from "@mui/icons-material";

function FundTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    function createData(no, type, description, income, payer, recorder, date) {
      return { no, type, description, income, payer, recorder, date };
    }
    
    const rows = [];
    
    for (var i = 1; i <= 25; i++) {
      rows.push(createData(i, "test", "test", "test", "楊宗翰", "楊宗翰", "6969"));
    }
    const handleChangePage = (event,newPage) => {
      setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          minWidth: 368,
          maxHeight: 600,
          width: "60vw",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>編號</TableCell>
              <TableCell align="center">類別</TableCell>
              <TableCell align="center">描述</TableCell>
              <TableCell align="center">收支</TableCell>
              <TableCell align="center">支付者</TableCell>
              <TableCell align="center">紀錄者</TableCell>
              <TableCell align="center">購買日期</TableCell>
              <TableCell align="center">操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.no}>
                  <TableCell component="th" scope="row">
                    {row.no}
                  </TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.income}</TableCell>
                  <TableCell align="center">{row.payer}</TableCell>
                  <TableCell align="center">{row.recorder}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <Delete />
                    </IconButton>
                    <IconButton>
                      <Update />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        sx={{ overflow: "auto" }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default FundTable;
