import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>


<div class="row justify-content-end">
                    <div class="col-auto me-2">
                        <button type="button" class="btn bg-color-grey btn-md"> Import</button>

                        <div class="btn-group" role="group">
                            <button type="button" class="btn bg-color-grey btn-md dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                  Export
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Save</a></li>
                            </ul>
                        </div>
                        <button type="button" class="btn bg-color-grey btn-md"></button>
                    </div>   
                </div>


                <div class="wd-grid-row">
                    <div class="wd-grid-col-half-page">
                        <h5>Student Names</h5>
                    </div>
                    <div class="wd-grid-col-half-page">
                        <h5>Assignment Names</h5>
                    </div>
                </div>

                <div class="wd-grid-row">
                    <div class="wd-grid-col-half-page ">
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01"></label>
                            <select class="form-select" id="inputGroupSelect01">
                              <option selected>Search Students</option>
                              <option value="1">One</option>
                            </select>
                        </div>
                    </div>
                    <div class="wd-grid-col-half-page">
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01"></label>
                            <select class="form-select" id="inputGroupSelect01">
                              <option selected>Search Assignments</option>
                              <option value="1">One</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn bg-color-grey btn-md">  Apply Filters</button>
                <hr/>



            <div className="table-responsive col-11">
                <table className="table table-bordered table-striped table-hover col-11" border="1" width="80%">
                <thead>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                </thead>
                <tbody>
                    {enrollments.map((enrollment) => {
                    const user = db.users.find((user) => user._id === enrollment.user);
                    return (
                        <tr>
                        <td>{user.firstName} {user.lastName}</td>
                        {assignments.map((assignment) => {
                            const grade = db.grades.find(
                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                            return (<td>{grade?.grade || ""}</td>);})}
                        </tr>);
                    })}
                </tbody></table>
            </div></div>);
}
export default Grades;
