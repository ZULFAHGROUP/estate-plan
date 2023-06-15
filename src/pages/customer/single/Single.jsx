import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailsCustomer } from "../../../redux/actions/customerActions";

const Single = (props, { match }) => {
  const customerDetails = useSelector((state) => state.customerDetails);
  const { customer, loading, error } = customerDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsCustomer(props.match.params.id));

    return () => {
      //
    };
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <div className="bottom">
            <div className="bottom">Customer Single page</div>
            <h1 className="title">{customer.username}</h1>
            <h4 className="title">{customer.user_id}</h4>
            <h4 className="title">{customer.status}</h4>
            <h4 className="title">{customer.details}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Single;
