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
import { GLOBALS } from "../../../global/Get";
import axios from "axios";

const postEstatePlan = async (image) => {
  const formData = new FormData();

  const result = await axios.post(`/api/v1/admin/estate-plan`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return result.data;
};

const NewPlan = ({ inputs, title }) => {
  const [estate_plan, setPlan] = useState("");
  const [status, setStatus] = useState("");
  const [details, setDetails] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postEstatePlan({
      estate_plan,
      status,
      details,
    });
    return result;
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
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

              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
              </FormControl>

              <div>
                <textarea
                  placeholder="Details"
                  className="formInput"
                  name="details"
                  value={details}
                  id="details"
                  onChange={(e) => setDetails(e.target.value)}
                  style={{ width: "100%" }}
                ></textarea>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlan;
