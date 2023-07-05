import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { listCustomer } from "../../../redux/actions/customerActions";

const Single = ({ match }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const customerId = location.pathname.split("/")[2];
  const customerList = useSelector((state) => state.customerList);
  const { customer, loading, error } = customerList;

  useEffect(() => {
    customer.filter((cus) => {
      return cus.user_id == customerId;
    });
    dispatch(listCustomer());
  }, [customerId]);

  console.log(customer);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h1>Customer Single page</h1>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <div className="bottom">
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
