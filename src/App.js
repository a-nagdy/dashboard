import { useEffect, useState } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged");
    if (storedIsLogged === "true") {
      setIsLogged(true);
    }
  }, []);
  const loginHandler = () => {
    setIsLogged(true);
    localStorage.setItem("isLogged", true);
  };
  return (
    <div className="App">
      {!isLogged && <Login isAdminLogged={loginHandler} />}
      {isLogged && <Dashboard />}
    </div>
  );
}

export default App;
