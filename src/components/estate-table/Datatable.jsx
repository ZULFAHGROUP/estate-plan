import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { customersRows, estatePlanColumn } from "../../data/estatePlan";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Action
import { listEstatePlan } from "../../redux/actions/estatePlanActions";

const Datatable = ({ columns }) => {
  const estatePlanList = useSelector((state) => state.estatePlanList);
  const { estatePlans, loading, error } = estatePlanList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listEstatePlan());
  }, []);

  console.log(estatePlans);

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         `${GLOBALS.BASE_URL}/api/v1/admin/estate-plan`,
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       const data = await response.json();
  //       setData(data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // console.log(data);

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${GLOBALS.BASE_URL}/api/v1/admin/estate-plan`);
  //     setData(data.filter((item) => item._id !== id));
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
            <Link to="/estateplan/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row._id)}
            >
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
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Datatable;
