import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "./reducer";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const signIn = async () => {
    try {
      const credentials = { username: username, password: password };
      const user = await client.signin(credentials);
      console.log(user);
      // dispatch(setCurrentUser(user));
      navigate("/project/account");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <h1>Signin</h1>
      {error && <div className="alert alert-danger">{error.message}</div>}
      {/* <input className="form-control mb-3" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input className="form-control mb-3" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <div class="d-grid gap-2">
        <button className="btn btn-primary" onClick={signin}> Signin </button>
      </div> */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn} className="btn btn-primary">
        Sign In
      </button>
    
    </div>
  );
}
export default Signin;