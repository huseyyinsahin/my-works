import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthContext from "./context/auth-context";
import Auth from "./Auth";

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const loginAuth = () => {
    setAuthStatus(true);
  };

  return (
    <>
      <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
        <Auth />
      </AuthContext.Provider>
    </>
  );
}

export default App;
