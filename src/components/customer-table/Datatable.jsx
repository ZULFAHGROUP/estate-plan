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
import axios from "axios";

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
    axiosInstance
      .get("/api/v1/admin/customers")
      .then((response) => {
        setCustomers(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // console.log(customers);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/admin/customers`);
      setCustomers(customers.filter((item) => item._id !== id));
    } catch (err) {}
  };

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
            <div className="deleteButton" onClick={handleDelete}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={customers}
        columns={customersColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(customers) => customers.user_id}
      />
    </div>
  );
};

export default Datatable;
