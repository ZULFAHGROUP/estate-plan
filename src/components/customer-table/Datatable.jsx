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
import {
  selectCurrentCustomer,
  selectCurrentToken,
} from "../../features/auth/authSlice";

// const accessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLWFkbWluQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsIl9pZCI6ImM5YzlhMDc3LWU1OGYtNDA3NS04YTVkLTFhMWE2YWJhNWEzYSIsImlhdCI6MTY4NzgxNzYwNywiZXhwIjoxNjg3ODIxMjA3fQ.407zRJUEJHyyomOdS2cmtIARySq2QT73yXa8_XLVhOA";

// const authAxios = axios.create({
//   baseURL: "https://mapp-asset-tracker.azurewebsites.net",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + accessToken,
//   },
//   withCredentials: true,
// });

const Datatable = () => {
  const customerList = useSelector((state) => state.customerList);
  const { customers, loading, error } = customerList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCustomer());
  }, []);

  console.log(customers);
  

  // const [customers, setCustomers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchCustomers = async () => {
  //     try {
  //       const response = await authAxios.get(
  //         `${Global.baseURL}/api/v1/admin/customers`
  //       );

  //       setCustomers(response.data.data);
  //       console.log(response.data.data.token);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   fetchCustomers();
  // }, []);

  // console.log(customers);

  // useEffect(() => {
  //   const fetchCustomers = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${Global.baseURL}/api/v1/admin/customers`,
  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer " +
  //               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLWFkbWluQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsIl9pZCI6IjZkMTdiNzQyLWU2NjktNDc1Yy1hNDUxLWQ2ZjQxZDM3MWUyNCIsImlhdCI6MTY4Nzc3OTMzNiwiZXhwIjoxNjg3NzgyOTM2fQ.La1ShB8NE8TIo6Zl32XQwRvCYuRnv2FzLt-PjozDIwc",
  //             withCredentials: true,
  //           },
  //         }
  //       );
  //       if (response.status === 200) {
  //         localStorage.setItem("token", JSON.stringify(response.data.data));
  //       }
  //       setCustomers(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching customers:", error);
  //     }
  //   };
  //   fetchCustomers();
  // }, []);

  // const customerRow = useMemo(() => customersRows, [customersRows]);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  // const [customers, setCustomers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("/api/v1/admin/customers")
  //     .then((response) => {
  //       setCustomers(response.data.data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);

  // console.log(customers);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/admin/customers`);
      // setCustomers(customers.filter((item) => item._id !== id));
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
