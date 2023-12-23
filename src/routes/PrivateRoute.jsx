import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(user) {
        return children;
    }
    
    
    if(loading){
        return <div className="min-h-screen flex justify-center items-center"><progress className="progress w-56"></progress></div>
    }

    return <Navigate state={location.pathname} to='/login' />
};

export default PrivateRoute;