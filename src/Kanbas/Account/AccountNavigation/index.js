import { Link, useParams, useLocation } from "react-router-dom";
import "./accountNavigation.css";


function AccountNavigation() {
    const links = ["Notification", "Profile", "Files", "Settings",
                    "ePortfolios", "Shared Content", "The Hub", "Qwickly Course Tools",
                    "Global Announcements"];
    // const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group kanbas-course-nav d-none d-sm-block d-sm-none d-md-block" style={{ width: 150 }}>
        {links.map((link, index) => (
            <Link
            key={index}
            to={`/Kanbas/Account/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {link}
            </Link>
        ))}
        </div>
    );
}


export default AccountNavigation;