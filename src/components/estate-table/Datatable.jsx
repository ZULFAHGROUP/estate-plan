import "./datatable.scss";
import React, { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { estatePlanRow, estatePlanColumn } from "../../data/estatePlan";
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
import { Global } from "../../global/Global";
import axios from "axios";

// Action

const Datatable = (props) => {
  const customerList = useSelector((state) => state.customerList);
  // const { customers, loading, error } = customerList;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(listCustomer());
  // }, []);

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [estatePlan, setEstatePlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${Global.baseURL}/api/v1/admin/estate-plans`, {
        headers: authHeader(),
      })
      .then((response) => {
        if (response.data.data.token) {
          setEstatePlan(response.data.data);
          localStorage.setItem("customers", JSON.stringify(response.data.data));
        }

        return response.data.data;
      });
  }, []);
  console.log(estatePlan);

  function authHeader() {
    const customers = JSON.parse(localStorage.getItem("customers"));

    if (customers && customers.token) {
      return { Authorization: "Bearer " + customers.token };
    } else {
      return {};
    }
  }
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/admin/esatate-plans`);
      setEstatePlan(estatePlan.filter((item) => item._id !== id));
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
        rows={estatePlan}
        columns={estatePlanColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(estatePlan) => estatePlan.user_id}
      />
    </div>
  );
};

export default Datatable;
