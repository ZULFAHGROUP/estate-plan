import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

// Action
import { logout } from "../../redux/actions/customerActions";

const Navbar = () => {
  const customerSignin = useSelector((state) => state.customerSignin);
  const { customerInfo } = customerSignin;

  const dispatchUser = useDispatch();

  const signoutHandler = () => {
    dispatchUser(logout());
  };

  const { dispatch } = useContext(DarkModeContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item" onClick={() => setOpenModal(!openModal)}>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>

          {openModal && (
            <div className="user-modal">
              {customerInfo && (
                <ul>
                  <li onClick={signoutHandler}>Sign Out</li>
                </ul>
              )}
            </div>
          )}
        </div>
        {!customerInfo && <Navigate to="/" />}
      </div>
    </div>
  );
};

export default Navbar;
