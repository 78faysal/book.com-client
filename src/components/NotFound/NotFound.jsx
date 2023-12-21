import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center text-center min-h-screen">
            <div>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p className="text-blue-500 underline cursor-pointer" onClick={() => navigate(-1)}>Go Home</p>
            </div>
        </div>
    );
};

export default NotFound;