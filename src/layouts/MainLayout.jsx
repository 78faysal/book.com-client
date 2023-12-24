import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="max-sm:px-5">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;