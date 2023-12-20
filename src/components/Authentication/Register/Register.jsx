import { Link } from "react-router-dom";
import GoogleLogIn from "../GoogleLogIn/GoogleLogIn";

const Register = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col">
                    <h2 className="text-3xl font-semibold">Register Now</h2>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
                            <div className="form-control mt-4">
                                <button className="btn btn-primary mb-4">Login</button>
                                <hr />
                                <div>
                                    <GoogleLogIn />
                                </div>
                            </div>
                            <div className="mt-3">
                                <p>Have an account? <Link className="text-blue-500" to='/login'>Login Now</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;