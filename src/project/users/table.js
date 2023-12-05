import React, { useState, useEffect } from "react";
import { BsPencil, BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import * as client from "./client";
import "./index.css";
import { Link } from "react-router-dom";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };



  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>
              <input className="form-control mb-3" value={user.password} placeholder="username" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
              <input className="form-control mb-3" value={user.username} placeholder="password" onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            </td>
            <td>
              <input className="form-control mb-3" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input className="form-control mb-3" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select class="form-select mb-3" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="text-nowrap">
            <BsFillCheckCircleFill onClick={updateUser} className="mb-3 text-success icon buttom-align" />
              <BsPlusCircleFill className="icon mb-3 buttom-align" onClick={createUser}/>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              {/* <td>{user.username}</td> */}
              <Link to={`/project/account/${user._id}`}>
                {user.username}
              </Link>

              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
                  <button className="btn btn-danger me-2">
                    <BsTrash3Fill onClick={() => deleteUser(user)} />
                  </button>
                  <button className="btn btn-warning me-2">
                    <BsPencil onClick={() => selectUser(user)} />
                  </button>
                </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;