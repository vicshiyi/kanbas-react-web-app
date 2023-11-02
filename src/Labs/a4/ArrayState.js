import React, { useState } from "react";

function ArrayState() {
  const [modules, setModules] = useState(["Module 1", "Module 2"]);
  const [newModule, setNewModules] = useState("");
  const [editModuleIndex, setEditModuleIndex] = useState(-1);

  const addModule = () => {
    // setModules([...modules, "New Module"]);
    const newModules = [...modules, newModule];
    setModules(newModules);
  };
  const deleteModule = (index) => {
    const newModules = modules.filter((modules, i) => i != index);
    setModules(newModules);
  };
  const updateModule = () => {
    const newModules = modules.map((modules, index) => {
        if(index === editModuleIndex) {
            return newModule;
        } else {
            return modules;
        }
    });
    setModules(newModules);
  };

  return (
    <div>
      <h2>Array State</h2>
      <button className="btn btn-primary float-end" onClick={updateModule}>Update</button>
      <button className="btn btn-success float-end" onClick={addModule}>Add Module</button>
      <input className="form-control w-50" value={newModule} onChange={(e) => setNewModules(e.target.value)} />
    
    <ul className="list-group">
        {modules.map((module, index) => 
            (<li key={index} className="list-group-item">
                <button className="btn btn-warning float-end" 
                        onClick={()=>{setNewModules(module);
                                      setEditModuleIndex(index);}}>
                    Edit
                </button>

                <button className="btn btn-danger float-end" 
                        onClick={()=>deleteModule(index)}>
                    Delete
                </button>
                {index}
                {module}
            </li>)
        )}
    </ul>
    </div>
  );
}
export default ArrayState;