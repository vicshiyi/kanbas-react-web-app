import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {BsThreeDotsVertical} from "react-icons/bs";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div> 
    <div class="row justify-content-end">
      <div class="col-auto me-2">
        
          <button type="button" class="btn wb-bg-color-grey btn-sm buttom-align" aria-expanded="false">
            Collapse All
          </button>

          <button type="button" class="btn wb-bg-color-grey btn-sm buttom-align" aria-expanded="false">
            View Progross
          </button>
            
          <div class="btn-group buttom-align" role="group">
              <button type="button" class="btn wb-bg-color-grey btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Publish All
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/kanbas/home.html">Save</a></li>
              </ul>
          </div>

          <button type="button" class="btn btn-danger btn-sm buttom-align">+ Module</button>
          <button type="button" class="btn wb-bg-color-grey btn-sm buttom-align"><BsThreeDotsVertical /></button>
      </div>  
  
         

    <ul className="list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
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