import Toggle from "./Toggle";
import Counter from "./Counter";
import Login from "../Login";

function StateManagement() {
    const count = 0;
    return (
        <div className="container">
            <h1>State Management</h1>
            <Login />
            <Toggle />
            <Counter />
        </div>
    );
}

export default StateManagement;