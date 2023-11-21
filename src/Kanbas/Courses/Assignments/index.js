import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>


      <div class="row justify-content-end">
            <div class="col-6"> 
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search for Assignment" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
            <div class="col-6"> 
                <button type="button" class="btn bg-color-grey btn-md">Group</button>
                <button type="button" class="btn btn-danger btn-md">Assignment</button>
                <button type="button" class="btn bg-color-grey btn-md"></button>
            </div>
        </div>
        <hr/>

      <h5>Assignments for course {courseId}</h5>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;