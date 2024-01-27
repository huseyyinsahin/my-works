import { useContext } from "react";
import AuthContext from "./context/auth-context";

function Auth() {
  const { status, login } = useContext(AuthContext);
  //const auth = useContext(AuthContext);
  console.log(status);
  return (
    <div>
      <h1>Giriş Yaptın mı?</h1>
      {status ? <p>Ohoo Çoktaaan</p> : <p>Hayır</p>}
      <button onClick={login}>Giriş Yap</button>
    </div>
  );
}

export default Auth;
