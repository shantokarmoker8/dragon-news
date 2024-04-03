import logo from "../../../assets/images/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className=" text-center">
      <img src={logo} alt="" className="mx-auto" />
      <p className="pt-5 text-xl text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="pt-3 text-xl font-semibold">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
