import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Calendar from "./Calendar";
import Courses from "./Courses";
import Dashboard from "./Dashboard";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
         <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account/>}/>
            <Route path="Dashboard" element={<Dashboard/>}/>
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<Calendar/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;