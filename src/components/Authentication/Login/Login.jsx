import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogIn from "../GoogleLogIn/GoogleLogIn";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);

    const {logInUser} = useContext(AuthContext);

    const handleFormSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then(result => {
            if(result.user){
                Swal.fire({
                    title: "Congrats!",
                    text: "User logged Successfully",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/')
            }
        })
        .catch(err => {
            Swal.fire({
                title: "Ops!",
                text: `${err.message}`,
                icon: "warning"
            });
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col">
                    <h2 className="text-3xl font-semibold">Login Now</h2>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleFormSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mb-4">Login</button>
                                <hr />
                                <div>
                                    <GoogleLogIn />
                                </div>
                            </div>
                            <div className="mt-3">
                                <p>New here? <Link className="text-blue-500" state={location.state} to='/register'>Create account</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;