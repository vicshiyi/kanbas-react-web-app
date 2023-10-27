import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState("");
    const login = () => {
        if (username === "admin" && password === "admin") {
            setIsAuthenticated(true);
        }
    };
    const logout = () => {
        setIsAuthenticated(false);
    };
    return (
        <div>
            <h2>Login</h2>
            {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <div>
                    <input type="text" placeholder="Username"
                            onClick={(e) => {setUsername(e.target.value);}}
                            value={username} />

                    <input type="password" placeholder="Password"
                            onClick={(e) => {setPassword(e.target.value);}}
                            value={password} />

                    <button onClick={login}>Login</button>
                </div>
            )}
        </div>
    );
}

export default Login;