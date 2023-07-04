import "./new.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { Global } from "../../../global/Global";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// Action
import { register } from "../../../redux/actions/customerActions";

const NewCustomer = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(username, status, email, age, password));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Create New Customer</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={status}
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value="active">
                    <em>Active</em>
                  </MenuItem>
                  <MenuItem value="inactive">
                    <em>Inactive</em>
                  </MenuItem>
                </Select>
              </FormControl>

              <div className="formInput">
                <label>Age</label>
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomer;
