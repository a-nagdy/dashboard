import { useEffect, useState } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const storedIsLogged = localStorage.getItem("userName");
    if (storedIsLogged) {
      setIsLogged(true);
    }
  }, [setIsLogged]);
  const loginHandler = () => {
    setIsLogged(true);
    let userName = document.getElementById("emailInput").value;
    localStorage.setItem("userName", userName);
    console.log(userName);
  };
  const logoutHandler = () => {
    setIsLogged(false);
    localStorage.setItem("userName", "");
  };
  return (
    // <LoginCTX>
    <div className="App">
      {!isLogged && <Login isAdminLogged={loginHandler} />}
      {isLogged && <Dashboard isAdminOut={logoutHandler} />}
    </div>
    // </LoginCTX>
  );
}

export default App;
