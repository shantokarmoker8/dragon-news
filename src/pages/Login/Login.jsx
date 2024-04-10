import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContex } from "../../providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContex);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[700px] mx-auto">
        <h1 className="text-center text-2xl lg:text-4xl text-[#403F3F] font-semibold">
          Login your account
        </h1>
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="text-base font-semibold text-[#403F3F]">
                Email address
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input bg-[#F3F3F3] rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base font-semibold text-[#403F3F]">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input bg-[#F3F3F3] rounded-none"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn rounded-none bg-[#403F3F] text-white hover:bg-black">
              Login
            </button>
          </div>
        </form>
        <p className="lg:text-base text-center text-[#706F6F] font-semibold">
          Dont’t Have An Account ?{" "}
          <Link className="text-[#F75B5F]" to="/registetion">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
