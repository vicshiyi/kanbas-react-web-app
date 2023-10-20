import { Link, useLocation } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi";
import {TfiDashboard} from "react-icons/tfi";
import {FaBook} from "react-icons/fa";
import {FaRegCalendarAlt} from "react-icons/fa";
import {GoInbox} from "react-icons/go";
import {BsClock} from "react-icons/bs";
import {LiaSitemapSolid} from "react-icons/lia";
import {BsBoxArrowRight} from "react-icons/bs";
import {BsQuestionCircle} from "react-icons/bs";
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", 
                  "Inbox", "History", "Studio", "Commons", "Help"];
  const mapToIcon = {
    "Account": <BiUserCircle className="wd-icon" />,
    "Dashboard": <TfiDashboard className="wd-icon" />,
    "Courses": <FaBook className="wd-icon" />,
    "Calendar": <FaRegCalendarAlt className="wd-icon" />,
    "Inbox": <GoInbox className="wd-icon-2" />, 
    "History": <BsClock className="wd-icon" />, 
    "Studio": <LiaSitemapSolid className="wd-icon-2" />, 
    "Commons": <BsBoxArrowRight className="wd-icon" />, 
    "Help": <BsQuestionCircle className="wd-icon-3" />,
  }
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 85 }}>
        <img src="../../images/neu_icon.png" height="85" width="85" />
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}>
                {mapToIcon[link]}
                {link}
            </Link>
        ))}
        <img src="../../images/bg_black.png" height="85" width="85" />
        <img src="../../images/bg_black.png" height="110" width="85" />
    </div>
  );
}
export default KanbasNavigation;