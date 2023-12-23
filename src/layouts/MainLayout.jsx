import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="max-sm:px-5">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;