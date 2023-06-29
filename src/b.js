import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../contextAPI/AuthProvider";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";

// import { signIn } from "../../redux/actions/customerActions";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  // const customerSignin = useSelector((state) => state.customerSignin);
  // const { customerInfo } = customerSignin;

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setError("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    // dispatch(signIn(email, password));
    e.preventDefault();
    try {
      const customerData = await login({ email, password });
      dispatch(setCredentials({ ...customerData, email }));
      setEmail("");
      setPassword("");
      navigate("/customers");
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  // console.log(customerInfo);

  // const { setAuth } = useContext(AuthContext);
  // const userRef = useRef();
  // const errRef = useRef();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [email, password]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       `https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/login`,
  //       JSON.stringify({ email, password }),
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     // const accessToken = response?.data?.token;
  //     if (response.status === 200) {
  //       localStorage.setItem("token", JSON.stringify(response.data));
  //     }
  //     setAuth(response.data);
  //     setEmail("");
  //     setPassword("");
  //     setSuccess(true);
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("No Server Response");
  //     } else if (err.response?.status === 400) {
  //       setErrMsg("Missing Username or Password");
  //     } else if (err.response?.status === 401) {
  //       setErrMsg("Unauthorized");
  //     } else {
  //       setErrMsg("Login Failed");
  //     }
  //   }

  //   if (success) {
  //     return <Navigate to="/customers" />;
  //   }
  // };

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div>
        <section className="login">
          <p ref={errRef} className={errMsg}></p>
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
          {/* {customerInfo ? <Navigate to="/customers" /> : <Navigate to="/" />} */}
        </section>
      </div>
    </>
  );

  return content;
};

export default Login;
