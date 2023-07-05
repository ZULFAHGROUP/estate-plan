import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { listCustomer } from "../../../redux/actions/customerActions";

const CustomerSingle = ({ match }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [single, setSingle] = useState([]);

  const customerId = location.pathname.split("/")[2];
  const customerList = useSelector((state) => state.customerList);
  const { customers, loading, error } = customerList;

  useEffect(() => {
    if (customers && customerId !== customers.id) {
      dispatch(listCustomer(customerId));
    }
  }, [dispatch, match, customerId]);

  console.log(customers);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Customer Single page</h1>
        </div>
        <div className="bottom">
          <div className="right">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              <div className="bottom">
                <h1 className="title">{customers.username}</h1>
                <h4 className="title">{customers.user_id}</h4>
                <h4 className="title">{customers.status}</h4>
                <h4 className="title">{customers.details}</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSingle;
