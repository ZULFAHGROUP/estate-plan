import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../contextAPI/AuthProvider";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Action
import { signIn } from "../../redux/actions/customerActions";

const Login = () => {
  const customerSignin = useSelector((state) => state.customerSignin);
  const { customerInfo } = customerSignin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  console.log(customerInfo);

  return (
    <>
      <div className="login">
        <section>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
            />
            <button type="submit">Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <a href="#">Sign Up</a>
            </span>
          </p>
          {customerInfo ? <Navigate to="/customers" /> : <Navigate to="/" />}
        </section>
      </div>
    </>
  );
};

export default Login;
