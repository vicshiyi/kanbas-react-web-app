import AccountNavigation from "./AccountNavigation";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

function Account() {
    return (
            
        <div>
            <AccountNavigation />
            <div>

            <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
                left: "320px",
                top: "50px",
            }}
            ><hr/>
            
            </div>
      
        
            </div>
        </div>
    );
}

export default Account;