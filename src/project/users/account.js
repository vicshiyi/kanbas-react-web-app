import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "./reducer";
function Account() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setUser(user);
  };

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const fetchUser = async () => {
    try {
      const user = await client.account();
      setUser(user);
    } catch (error) {
      navigate("/project/signin");
    }
  };
  const updateUser = async () => {
    const status = await client.updateUser(user._id, user);
  };
  const signout = async () => {
    const status = await client.signout();
    // dispatch(setCurrentUser(null));
    navigate("/project/signin");
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchUser();
    }

  }, []);

  return (
    <div>
      <h1>Account</h1>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <input
            type="email"
            className="form-control mb-3"
            value={user.email}
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-3"
            value={user.firstName}
            placeholder="First Name"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-3"
            value={user.lastName}
            placeholder="Last Name"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <input 
            type="text"
            className="form-control mb-3"
            value={user.password}
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input 
            type="Date"
            className="form-control mb-3"
            value={user.dob}
            onChange={(e) => setUser({ ...user, dob: e.target.value })}
          />

          <button onClick={updateUser} className="btn btn-primary buttom-align mb-3">
             Update
          </button>
          <button onClick={signout} className="btn btn-danger buttom-align mb-3">
             Sign Out
           </button>
           {user.role === "ADMIN" && (
            <Link to="/project/users" className="btn btn-warning buttom-align mb-3">
              Users
            </Link>
           )}
        </div>
      )}
    </div>
  );
}

export default Account;


