import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailsEstatePlan } from "../../../redux/actions/estatePlanActions";

const Single = (props, { match }) => {
  const estatePlanDetails = useSelector((state) => state.estatePlanDetails);
  const { estatePlan, loading, error } = estatePlanDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsEstatePlan(props.match.params.id));

    return () => {
      //
    };
  }, []);

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
          <h1 className="title">{estatePlan.estate_plan}</h1>
          <h4 className="title">{estatePlan.user_id}</h4>
          <h4 className="title">{estatePlan.status}</h4>
          <h4 className="title">{estatePlan.details}</h4>
        </div>
      )}
    </div>
  );
};

export default Single;
