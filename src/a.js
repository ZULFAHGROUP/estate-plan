import "./datatable.scss";
import React, { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { customersRows, customersColumns } from "../../data/customers";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { listCustomer } from "../../redux/actions/customerActions";
import { axiosInstance } from "../../global/Get";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Action

const Datatable = (props) => {
  const customerList = useSelector((state) => state.customerList);
  // const { customers, loading, error } = customerList;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(listCustomer());
  // }, []);

  // const customerRow = useMemo(() => customersRows, [customersRows]);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/api/v1/admin/customers`);
        const data = await response.json();
        setCustomers(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`/api/v1/admin/customers`);
  //     setCustomers(data.filter((item) => item._id !== id));
  //   } catch (err) {}
  // };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/customers/test`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SN</StyledTableCell>
            <StyledTableCell align="right">Surname</StyledTableCell>
            <StyledTableCell align="right">Other Names</StyledTableCell>
            <StyledTableCell align="right">Phone No</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <div>Loading... </div>
          ) : error ? (
            <div>error</div>
          ) : (
            customers.map((row) => (
              <StyledTableRow key={row.user_id}>
                <StyledTableCell component="th" scope="row">
                  {row.sn}
                </StyledTableCell>
                <StyledTableCell align="right">{row.surname}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.othernames}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.phone_number}
                </StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Datatable;
