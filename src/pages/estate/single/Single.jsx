import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailsEstatePlan } from "../../../redux/actions/estatePlanActions";

const Single = ({ match }) => {
  const detailsEstatePlan = useSelector((state) => state.estatePlanDetails);
  const { estatePlan, loading, error } = detailsEstatePlan;
  const dispatch = useDispatch();

  useEffect(() => {
    if (estatePlan && match.params.id !== estatePlan.id) {
      dispatch(detailsEstatePlan(match.params.id));
    }
  }, [dispatch, estatePlan, match]);
  console.log(estatePlan);

  return (
    <div className="single">
      <Sidebar />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="singleContainer">
          <Navbar />
          <div className="bottom">Estate Plan Single page</div>
          {/* <h1 className="title">{estatePlan.estate_plan}</h1> */}
          {/* <h4 className="title">{estatePlan.status}</h4>
          <h4 className="title">{estatePlan.details}</h4> */}
        </div>
      )}
    </div>
  );
};

export default Single;
