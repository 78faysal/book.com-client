import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Providers/AuthProvider";


const GoogleLogIn = () => {
    const {googleLogIn} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogIn()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div>
            <h2 className="flex items-center text-lg gap-2 btn" onClick={handleGoogleLogin}>Continue with <FcGoogle className="text-3xl" /></h2>
        </div>
    );
};

export default GoogleLogIn;