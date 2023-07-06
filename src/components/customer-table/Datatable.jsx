import "./datatable.scss";
import React, { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { customersRows, customersColumns } from "../../data/customers";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Global } from "../../global/Global";
import axios from "axios";

// Action
import { listCustomer } from "../../redux/actions/customerActions";

const Datatable = ({ match }) => {
  const customerList = useSelector((state) => state.customerList);
  const { customers, loading, error } = customerList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCustomer());
  }, []);

  console.log(customers);

  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (customers) => {
        return (
          <div className="cellAction">
            <Link
              to={`/customers/${customers.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
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
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
        getRowId={(customers) => customers.user_id}
      />
    </div>
  );
};

export default Datatable;
