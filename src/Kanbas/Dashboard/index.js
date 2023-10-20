import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
    const courses = db.courses;
    return (
        // <div>
        // <h1>Dashboard</h1>
        // <hr/>
        // <h2>Published Courses ({courses.length})</h2>
        // <div className="list-group">
        //     {courses.map((course, index) => (
        //     <Link 
        //         key={course._id} 
        //         to={`/Kanbas/Courses/${course._id}`} 
        //         className="list-group-item"
        //     >
        //         {course.name}
        //     </Link>
        //     ))}
        // </div>
        // </div>


    <div class="wd-flex-grow-1 dashboard ">
        <h1>Dashboard</h1>
        <hr/>
        <div class="published-course">
            <h2>Published Courses ({courses.length})</h2>
            <hr/>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 d-flex flex-row flex-wrap">
            <div class="col">
                <div class="card">
                    {courses.map((course, index) => (
                        <div class="card">
                        <img src="/images/blue.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">{course.name}</h6>

                            <Link
                            key={course._id}
                            to={`/Kanbas/Courses/${course._id}`}
                            className="btn btn-primary"
                            >
                            {course.name}
                            </Link>
                            <p class="card-text custom-card-text-2">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </div>
    </div>




  );
}
export default Dashboard;
