import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import React from "react";
import db from "../Database";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {AiOutlineMenu} from "react-icons/ai";
import "./index.css";
// import JsonPre from "../../Labs/a3/JsonPre";

function Courses({ courses }) {
    const {courseId} = useParams();
    // const {pathname} = useLocation();
    // const [empty, kanbas, courses, id, screen] = pathname.split("/");
    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            
          <h3 className="text-red"><AiOutlineMenu className="course-icon"/> Courses: {course.name} / </h3>
           
          <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        ><hr/>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Modules" element={<h1>Modules</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

            {/* <JsonPre json={course} /> */}
        </div>
    );
}

export default Courses;