import { Link } from "react-router-dom";
import * as client from "./client";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const fetchUser = async () => {
    const user = await client.account();
    setCurrentUser(user);
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUser();
    fetchUsers();

  }, []);
  return (
    <div>
      {currentUser && currentUser.role === "ADMIN" && (<>
      <h2>Users</h2>
      <div className="list-group">
      {users.map((user) => (
        <Link key={user._id}
              to={`/project/users/${user._id}`}
              className="list-group-item">
              {user.username}
        </Link>
        
      ))}
      </div>
      </>)}
      {currentUser && currentUser.role !== "ADMIN" && (
        <Navigate to="/project/signin" />
      )}

        {/* <h2>Users</h2>
        <div className="list-group">
        {users.map((user) => (
          <Link key={user._id}
                to={`/project/users/${user._id}`}
                className="list-group-item">
                {user.username}
          </Link>
        ))}
        </div> */}
    
    </div>

    
    );
}
export default UserList;
