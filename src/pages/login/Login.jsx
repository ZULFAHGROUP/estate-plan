import { useRef, useState, useEffect, useContext } from "react"
import AuthContext from "../../contextAPI/AuthProvider"
import axios from "axios"
import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { signIn } from "../../redux/actions/customerActions"

const Login = () => {
  const customerSignin = useSelector((state) => state.customerSignin)
  const { customerInfo } = customerSignin

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signIn(email, password))
  }

  console.log(customerInfo)

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

  return (
    <>
      <div className='login'>
        <section>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              required
              name='email'
            />
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              required
              name='password'
            />
            <br />
            <button type='submit'>Sign In</button>
          </form>
          {customerInfo ? <Navigate to='/customers' /> : <Navigate to='/' />}
        </section>
      </div>
    </>
  )
}

export default Login
