import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Customers from "./pages/customer/Customers";
import CustomerSingle from "./pages/customer/single/Single";
import EstateSingle from "./pages/estate/single/Single";
import NewCustomer from "./pages/customer/new/New";
import NewPlan from "./pages/estate/new/New";
import AuthContext from "./contextAPI/AuthProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { estatePlantInputs, customerInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Estate from "./pages/estate/Estate";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  // const ProtectedRoute = ({ children }) => {
  //   const { user } = useContext(AuthContext);

  //   if (!user) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/customers">
            <Route index element={<Customers />} />
            <Route path=":customerId" element={<CustomerSingle />} />
            <Route
              path="new"
              element={
                <NewCustomer inputs={customerInputs} title="Add New Customer" />
              }
            />
          </Route>
          <Route path="/estateplan">
            <Route index element={<Estate />} />
            <Route path=":estateplanId" element={<EstateSingle />} />
            <Route
              path="new"
              element={
                <NewPlan inputs={estatePlantInputs} title="Add New Plan" />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
