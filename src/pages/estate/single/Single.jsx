import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

import {
  listEstatePlan,
  detailsEstatePlan,
} from "../../../redux/actions/estatePlanActions";
import { Global } from "../../../global/Global";

const EstateSingle = ({ match }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [single, setSingle] = useState([]);

  const customerId = location.pathname.split("/")[2];
  const estatePlanList = useSelector((state) => state.estatePlanList);
  const { estatePlans, loading, error } = estatePlanList;

  const { estate_plan, user_id, status, details } = estatePlans;

  useEffect(() => {
    detailsEstatePlan(customerId);
    // const found = new Set(estatePlans.filter((item) => item.id == customerId));
    // dispatch(listEstatePlan(customerId));
    // if (estatePlan && customerId === estatePlan.id) {
    //   dispatch(listEstatePlan(customerId));
    // }
    // const new_ = estatePlans.filter((cus) => {
    //   return cus.id !== estatePlans.user_id;
    // });
    // setSingle(found);
    // console.log(single);
  }, []);

  console.log(customerId);
  console.log(estatePlans);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Estate Plan Single Page</h1>
        </div>
        <div className="bottom">
          <div className="right">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              <div className="bottom">
                <h1 className="title">{console.log(estate_plan)}</h1>
                <h4 className="title">{user_id}</h4>
                <h4 className="title">{status}</h4>
                <h4 className="title">{details}</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateSingle;
