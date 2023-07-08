import "./new.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { customersRows } from "../../../data/customers";
import { Global } from "../../../global/Global";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

// Action
import { saveEstatePlan } from "../../../redux/actions/estatePlanActions";

const handleToast = () => {
  toast.success(" \u{1F44C} Estate Plan Success!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const NewPlan = () => {
  const dispatch = useDispatch();

  const [estate_plan, setPlan] = useState("");
  const [customer, setCustomer] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(saveEstatePlan(estate_plan, customer, details));
    setPlan("");
    setCustomer("");
    setDetails("");
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Create Estate Plan</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Estate Plan</label>
                <input
                  type="text"
                  placeholder="Estate Plan"
                  name="estate_plan"
                  value={estate_plan}
                  onChange={(e) => setPlan(e.target.value)}
                />
              </div>

              {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  name="status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">InActive</MenuItem>
                </Select>
              </FormControl> */}

              <div className="formInput">
                <label>Customer</label>
                <input
                  type="text"
                  placeholder="Customer"
                  name="customer"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                />
              </div>

              <div>
                <textarea
                  placeholder="Details"
                  className="formInput"
                  name="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  style={{ width: "100%" }}
                ></textarea>
              </div>

              <button type="submit" onClick={handleToast}>
                Send
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlan;
