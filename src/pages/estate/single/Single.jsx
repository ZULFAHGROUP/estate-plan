import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { listEstatePlan } from "../../../redux/actions/estatePlanActions";

const EstateSingle = ({ match }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [single, setSingle] = useState([]);

  const customerId = location.pathname.split("/")[2];
  const estatePlanList = useSelector((state) => state.estatePlanList);
  const { estatePlans, loading, error } = estatePlanList;

  useEffect(() => {
    // function findArrayElementByTitle() {
    //   return customers.find((element) => {
    //     return element.sn === customerId;
    //   });
    // }
    // findArrayElementByTitle();
    if (estatePlans && customerId === estatePlans.user_id) {
      dispatch(listEstatePlan(customerId));
    }
    // const new_ = estatePlans.filter((cus) => {
    //   return cus.id !== estatePlans.user_id;
    // });
    // setSingle(new_);
  }, [dispatch, match, customerId]);

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
                {/* <h1 className="title">{estatePlans.username}</h1>
                <h4 className="title">{estatePlans.user_id}</h4>
                <h4 className="title">{estatePlans.status}</h4>
                <h4 className="title">{estatePlans.details}</h4> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateSingle;
