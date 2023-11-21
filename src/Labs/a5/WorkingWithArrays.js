import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const [id, setId] = useState(1);
    const [errorMessage, setErrorMessage] = useState(null);
    const [title, setTitle] = useState("Go to work");
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({});
    <input
        className="form-control"
        value={id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
    />;

    const TODOS_API = "http://localhost:4000/a5/todos";
    const API = "http://localhost:4000/a5/todos";

    const fetchTodosPromise = () => {
        const promise = axios.get(TODOS_API);
        promise.then((response) => {
        setTodos(response.data);
        });
    };

    const createTodo = async () => {
        const response = await axios.get("http://localhost:4000/a5/todos/create");
        setTodos(response.data);
    };

    const postTodo = async () => {
        const response = await axios.post("http://localhost:4000/a5/todos", {
        title: title,
        });
        setTodos(response.data);
    };

    const fetchTodos = async () => {
        const response = await axios.get("http://localhost:4000/a5/todos");
        setTodos(response.data);
    };

    const removeTodo = async (id) => {
        const response = await axios.get(`${TODOS_API}/${id}/delete`);
        setTodos(response.data);
    };

    const deleteTodo = async (id) => {
        try {
            const response = await axios.delete(`${TODOS_API}/${id}`);
            setTodos(response.data);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }      
    };

    const updateTodo = async () => {
        try {
          const response = await axios.put(
            `${API}/${todo.id}`, todo);
          setTodos(todos.map((t) => (
            t.id === todo.id ? todo : t)));
          setTodo({});
        } catch (error) {
          console.log(error);
          setErrorMessage(error.response.data.message);
        }
    };
    

    const fetchTodoById = async (id) => {
        const response = await axios.get(`${TODOS_API}/${id}`);
        setTodo(response.data);
    };    

    const updateTitle = async (id, title) => {
        const response = await axios.get(`${TODOS_API}/${id}/title/${title}`);
        setTodos(response.data);
    };

    useEffect(() => {
        // fetchTodosPromise();
        fetchTodos();
    }, []);
    // const API = "http://localhost:4000/a5/todos";
    // const [title, setTitle] = useState("Go to work");
    // // const [todo, setTodo] = useState({
    // //     id: 1,
    // //     title: "NodeJS Assignment",
    // //     description: "Create a NodeJS server with ExpressJS",
    // //     due: "2021-09-09",
    // //     completed: false,
    // // });
    // const [todo, setTodo] = useState([]);

    // const TODOS_API = "http://localhost:4000/a5/todos";
    
    // const fetchTodosPromise = () => {
    //     const promise = axios.get("http://localhost:4000/a5/todos");
    //     // console.log(promise);
    //     promise.then((response) => {
    //         console.log(response);
    //         setTodo(response.data);
    //     });
    // };

    // const createTodo = async () => {
    //     const response = await axios.get("http://localhost:4000/a5/todos/create");
    //     setTodo(response.data);
    // };

    // const fetchTodos = async () => {
    //     const response = await axios.get("http://localhost:4000/a5/todos");
    //     setTodo(response.data);
    // };

    // const removeTodo = async (id) => {
    //     const response = await axios.get(`${TODOS_API}/${id}/delete`);
    //     setTodo(response.data);
    // };

    // const deleteTodo = async (id) => {
    //     const response = await axios.delete(`${TODOS_API}/${id}`);
    //     setTodo(response.data);
    //   };
    
    //   const updateTitle = async (id, title) => {
    //     const response = await axios.get(`${TODOS_API}/${id}/title/${title}`);
    //     setTodo(response.data);
    //   };

    // useEffect(() => {
    //     // fetchTodosPromise();
    //     fetchTodos();
    // }, []);

    return (
        <div>
            <h1>Working with Arrays</h1>
            <h2>Todos from server</h2>
            {errorMessage && (
            <div className="alert alert-danger mb-2 mt-2">
                {errorMessage}
            </div>
            )}

            <input className="form-control mb-2 w-100" value={todo.id} readOnly />
            <input
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="form-control mb-2 w-100"
                onChange={(e) => setTodo({ ...todo,
                description: e.target.value })}
                value={todo.description} type="text"
            />
            <input
                className="form-control mb-2 w-100"
                onChange={(e) => setTodo({
                ...todo, due: e.target.value })}
                value={todo.due} type="date"
            />
            <label>
                <input
                className="form-check-input"
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked })}
                value={todo.completed} type="checkbox"
                />
                Completed
            </label>
        

            <button className="btn btn-warning mb-2 w-100" onClick={postTodo}>
                Post Todo
            </button>
            <button
                className="btn btn-success mb-2 w-100"
                onClick={() => updateTitle(id, title)}>
                Update Todo Title
            </button>
            <button className="btn btn-primary mb-2 w-100" onClick={createTodo}>
                Create Todo
            </button>
        
            
            <ul className="list-group">
                {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    <button
                        onClick={() => fetchTodoById(todo.id)}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger me-2 float-end"
                        onClick={() => deleteTodo(todo.id)}>
                        Delete
                    </button>
                    <input
                        checked={todo.completed}
                        type="checkbox" className="form-check-input" readOnly
                    />
                    {todo.title}
                    <p>{todo.description}</p>
                    <p>{todo.due}</p>
                    {todo.title}
                    <hr />
                    {todo.id}
                </li>
                ))}
            </ul>
            <h2>Update item title</h2>
            <input
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <a
                href={`http://localhost:4000/a5/todos/${id}/title/${title}`}
                className="btn btn-primary"
            >
                Update Todo Title
            </a>
            <h2>Fetch item by id</h2>

            <input
                className="form-control"
                value={id}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />

            <input
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <a
                href={`http://localhost:4000/a5/todos/${id}`}
                className="btn btn-primary"
            >
                Fetch Todo {id}
            </a>
            <h2>Fetch Array</h2>
            <a href="http://localhost:4000/a5/todos" className="btn btn-primary">
                Fetch Todos
            </a>
    </div>



    //   <div>
    //     <h1>Working with Arrays</h1>
    //     <h2>Todos from server</h2>
    //     <button className="btn btn-primary" onClick={() => updateTitle(todo.id, title)}>Update Title</button>
    //     <button className="btn btn-primary" onClick={createTodo}>Create Todo</button>
    //     <ul className="list-group">
    //     {todo.map((todo) => (
    //       <li className="list-group-item" key={todo.id}>
    //         <button
    //           className="btn btn-danger float-end"
    //           onClick={() => removeTodo(todo.id)}
    //         >
    //           Delete
    //         </button>
    //         {todo.title}
    //         <hr />
    //         {todo.id}
    //       </li>
    //     ))}
    //   </ul>


    //     <h3>Retrieving Arrays</h3>
    //     <a href={API} className="btn btn-primary me-2">
    //       Get Todos
    //     </a>

    //     <h3>Retrieving an Item from an Array by ID</h3>
    //     <input
    //         className="form-control"
    //         value={todo.id}
    //         onChange={(e) => setTodo({ ...todo,
    //         id: e.target.value })}/>
    //     <a href={`${API}/${todo.id}`}
    //         className="btn btn-primary me-2">
    //         Get Todo by ID
    //     </a>



    //     <h3>Updating an Item in an Array</h3>
    //     <input
    //         value={todo.id}
    //         onChange={(e) => setTodo({
    //         ...todo, id: e.target.value })}
    //         className="form-control mb-2"
    //         type="number"
    //     />
    //     <input
    //         value={todo.title}
    //         onChange={(e) => setTodo({
    //         ...todo, title: e.target.value })}
    //         className="form-control mb-2"
    //         type="text"
    //     />
    //     <a
    //         href={`${API}/${todo.id}/title/${todo.title}`}
    //         className="btn btn-primary me-2" >
    //         Update Title to {todo.title}
    //     </a>


    //     <h3>Creating new Items in an Array</h3>
    //     <a href={`${API}/create`}
    //         className="btn btn-primary me-2">
    //         Create Todo
    //     </a>


    //     <h3>Deleting from an Array</h3>
    //     <input
    //         value={todo.id}
    //         onChange={(e) => setTodo({
    //         ...todo, id: e.target.value })}
    //         className="form-control mb-2"
    //         type="number"
    //     />
    //     <a href={`${API}/${todo.id}/delete`}
    //         className="btn btn-primary me-2">
    //         Delete Todo with ID = {todo.id}
    //     </a>


    //     <h3>Filtering Array Items</h3>
    //     <a href={`${API}?completed=true`}
    //         className="btn btn-primary me-2" >
    //         Get Completed Todos
    //     </a>


    //     <h2>Update item title</h2>
    //     <input
    //         className="form-control"
    //         value={title}
    //         onChange={(e)=>setTitle(e.target.value)}/>
    //     <a href={`http://localhost:4000/a5/todos/${todo.id}/title/${title}`}
    //         className="btn btn-primary me-2">Update Todo Title</a>

    //   </div>
    );
  }
  export default WorkingWithArrays;