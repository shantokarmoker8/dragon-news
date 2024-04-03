import facebook from "../../../assets/icon/facebook.svg";
import x from "../../../assets/icon/twitter.svg";
import instrgram from "../../../assets/icon/instrgram.svg";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LeftNav = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-bold text-[#403F3F]">Login With</h3>
        <div className="flex flex-col gap-2">
          <button className="flex items-center text-base text-blue-500 border border-blue-500 rounded w-full btn">
            <FaGoogle /> Login with Google
          </button>
          <button className="flex items-center text-base text-black border border-black rounded w-full btn">
            <FaGithub /> Login with Github
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-bold text-[#403F3F]">Find Us On</h3>
        <div>
          <a
            href=""
            className="flex items-center text-base text-[#706F6F] p-4 border gap-2"
          >
            <img src={facebook} alt="" />
            Facebook
          </a>
          <a
            href=""
            className="flex items-center text-base text-[#706F6F] p-4 border gap-2"
          >
            <img src={x} alt="" />
            Twitter
          </a>
          <a
            href=""
            className="flex items-center text-base text-[#706F6F] p-4 border gap-2"
          >
            <img src={instrgram} alt="" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
