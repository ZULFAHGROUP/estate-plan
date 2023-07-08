import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { detailsCustomer } from "../../../redux/actions/customerActions";

const CustomerSingle = ({ match }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [single, setSingle] = useState([]);

  const customerId = location.pathname.split("/")[2];
  const customerDetails = useSelector((state) => state.customerDetails);
  const { customerInfo, loading, error } = customerDetails;

  useEffect(() => {
    // function findArrayElementByTitle() {
    //   return customerInfo.find((element) => {
    //     return element.sn === customerId;
    //   });
    // }
    // findArrayElementByTitle();
    if (customerInfo && customerId === customerInfo.id) {
      dispatch(detailsCustomer(customerId));
    }
    // const new_ = customerInfo.filter((cus) => {
    //   return cus.id !== customerInfo.user_id;
    // });
    // setSingle(new_);
  }, [dispatch, match, customerId]);

  console.log(customerInfo);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Customer Single Page</h1>
        </div>
        <div className="bottom">
          <div className="right">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              <div className="bottom">
                <h1 className="title">{customerDetails.username}</h1>
                <h4 className="title">{customerDetails.user_id}</h4>
                <h4 className="title">{customerDetails.status}</h4>
                <h4 className="title">{customerDetails.details}</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSingle;
