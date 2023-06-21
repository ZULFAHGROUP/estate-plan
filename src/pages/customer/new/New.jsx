import "./new.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { Global } from "../../../global/Post";
import axios from "axios";

const NewCustomer = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const submitForm = async () => {
    const formPayload = {
      username,
      img: file,
      status,
      email,
      age,
    };

    try {
      const response = await axios.post(
        `${Global.baseURL}/api/v1/admin/customers/register`,
        formPayload
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
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
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={submitForm}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={status}
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
