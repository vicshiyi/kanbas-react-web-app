import {BsCalendar4Week} from "react-icons/bs"
import "./index.css"

function Status() {
    return (
        <div class="nav-width-300px d-none d-xl-block statu ">
            <p>Course Status</p>
                    <hr/>

                    <div class="btn-group statu-align" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn buttom-color">Unpublish</button>
                        <button type="button" class="btn btn-success">Published</button>
                    </div>
                    <br/>
                    <br/>

            <div class="d-grid gap-1">
                <button class="btn buttom-color" type="button">Import Existing Content</button>
                <button class="btn buttom-color" type="button">Impoet From Commons</button>
                <button class="btn buttom-color" type="button">Choose Home Page</button>
                <button class="btn buttom-color" type="button">View Course Stream</button>
                <button class="btn buttom-color" type="button">New Announcement</button>
                <button class="btn buttom-color" type="button">New Analytics</button>
                <button class="btn buttom-color" type="button">View Course Notifications</button>
            </div><br/><br/>



            <p>Comming Up</p>
            <hr/>
            
            <div class="row mb-3">
                <label for="settings-cd-image" class="col-sm-2 col-form-label"><BsCalendar4Week /></label>
                <div class="col-sm-10">
                    
                    <a href="https://northeastern.zoom.us/j/98697073658#success" class="red-name">Lecture</a><p>CS4550.12631.202410 Sep 7 at 11:45am</p>
                </div>
            </div>

            <div class="row mb-3">
                <label for="settings-cd-image" class="col-sm-2 col-form-label"><BsCalendar4Week /></label>
                <div class="col-sm-10">
                    <a href="https://northeastern.zoom.us/j/92367464797?pwd=eWp4ZStUOFJmTi9ZSk5iSTVTNWZ2QT09#success" class="red-name">CS5610 06 SP23 Lecture</a><p>CS4550.12631.202410 Sep 11 at 11:45am</p>
                </div>
            </div>

            <div class="row mb-3">
                <label for="settings-cd-image" class="col-sm-2 col-form-label"><BsCalendar4Week /></label>
                <div class="col-sm-10">
                    <a href="https://northeastern.zoom.us/j/99253030955#success" class="red-name">CS5610 Web Development SUMMER01 Lecture</a><p>CS5620 06 SP23 Lecture Sep 11 at 6am</p>
                </div>
            </div>

        </div>

    )
}

export default Status;