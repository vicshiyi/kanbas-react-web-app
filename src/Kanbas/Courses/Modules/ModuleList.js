import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./moduleList.css"
import {BsThreeDotsVertical} from "react-icons/bs";

function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useState(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const addModule = (module) => {
    setModules([
      { ...module, _id: new Date().getTime().toString() },
        ...modules,
    ]);
  };

  const deleteModule = (moduleId) => {
    setModules(modules.filter(
      (module) => module._id !== moduleId));
  };

  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
  }


  // const modules = db.modules;
  return (
    <div> 
    <div class="row justify-content-end">
      <div class="col-auto me-2">
        
          <button type="button" class="btn btn-sm buttom-align buttom-color" aria-expanded="false">
            Collapse All
          </button>

          <button type="button" class="btn wb-bg-color-grey btn-sm buttom-align buttom-color" aria-expanded="false">
            View Progross
          </button>
            
          <div class="btn-group buttom-align" role="group">
              <button type="button" class="btn btn-sm dropdown-toggle buttom-color" data-bs-toggle="dropdown" aria-expanded="false">
                  Publish All
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/kanbas/home.html">Save</a></li>
              </ul>
          </div>

          <button type="button" class="btn btn-danger btn-sm buttom-align" onClick={() => { addModule(module) }}>+ Module</button>
          <button type="button" class="btn wb-bg-color-grey btn-sm buttom-align buttom-color"><BsThreeDotsVertical /></button>
      </div>  
  
         

    <ul className="list-group">
      <li className="list-group-item">
          <button className="btn btn-success float-end buttom-align" onClick={() => { addModule(module) }}>Add</button>
          <button className="btn btn-primary float-end buttom-align" onClick={updateModule}>
                Update
        </button>

          <input value={module.name}
            onChange={(e) => setModule({
              ...module, name: e.target.value })}
          />
          <textarea value={module.description}
            onChange={(e) => setModule({
              ...module, description: e.target.value })}
          />
        </li>


      {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <button
              className="btn btn-warning float-end buttom-align"
              onClick={(event) => { setModule(module); }}>
              Edit
            </button>

            <button
              className="btn btn-danger float-end buttom-align"
              onClick={() => deleteModule(module._id)}>
              Delete
            </button>

             <h3>{module.name}</h3>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
    </div> 
    </div> 

  )
}
export default ModuleList;