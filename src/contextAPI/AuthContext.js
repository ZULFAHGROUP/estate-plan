const { useState, useEffect, createContext } = require("react");
const { Global } = require("../global/Global");

export const AuthContext = createContext();

export const AuthContextPropvuder = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const login = async (input) => {
    const res = await axios.post(`${Global.baseURL}/login`, input);
    setCurrentUser(res.data.data);
  };

  const logout = async (input) => {
    await axios.post(`${Global.baseURL}/logout`, input);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logou }}>
      {children}
    </AuthContext.Provider>
  );
};
