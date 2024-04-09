import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContex } from "../../providers/AuthProviders";

const Registetion = () => {
  const { createUser } = useContext(AuthContex);

  const handleRegistation = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[700px] mx-auto">
        <h1 className="text-center text-2xl lg:text-4xl text-[#403F3F] font-semibold ">
          Register your account
        </h1>

        <form className="card-body" onSubmit={handleRegistation}>
          <div className="form-control">
            <label className="label">
              <span className="text-base font-semibold text-[#403F3F]">
                Your Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input bg-[#F3F3F3] rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base font-semibold text-[#403F3F]">
                Photo URL
              </span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input bg-[#F3F3F3] rounded-none"
              required
            />
          </div>
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
          <div className="flex gap-3">
            <input type="checkbox" className="checkbox" id="checked" required />
            <label
              htmlFor="checked"
              className="text-base font-semibold text-[#403F3F]"
            >
              Term & Conditions
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn rounded-none bg-[#403F3F] text-white hover:bg-black">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registetion;
