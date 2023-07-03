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
import { Global } from "../../global/Global";
import axios from "axios";

// Action
import { listEstatePlan } from "../../redux/actions/estatePlanActions";

const Datatable = (props) => {
  const estatePlanList = useSelector((state) => state.estatePlanList);
  const { estatePlans, loading, error } = estatePlanList;

  console.log(estatePlans);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listEstatePlan());
  }, []);

  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/admin/esatate-plans`);
      // setEstatePlan(estatePlan.filter((item) => item._id !== id));
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
        rows={estatePlans}
        columns={estatePlanColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(estatePlans) => estatePlans.id}
      />
    </div>
  );
};

export default Datatable;
