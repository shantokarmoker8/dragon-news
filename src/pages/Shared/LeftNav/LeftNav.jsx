import facebook from "../../../assets/icon/facebook.svg";
import x from "../../../assets/icon/twitter.svg";
import instrgram from "../../../assets/icon/instrgram.svg";
import swimming from "../../../assets/images/swimming.png";
import Class from "../../../assets/images/class.png";
import playGround from "../../../assets/images/play-graund.png";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LeftNav = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-bold text-[#403F3F]">Login With</h3>
        <div className="flex flex-col gap-2">
          <button className="flex items-center text-base text-blue-500 border border-blue-500 rounded-lg w-full btn">
            <FaGoogle /> Login with Google
          </button>
          <button className="flex items-center text-base text-black border border-black rounded-lg w-full btn">
            <FaGithub /> Login with Github
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-bold text-[#403F3F]">Find Us On</h3>
        <div>
          <a
            href=""
            className="flex items-center text-base text-[#706F6F] p-4 border gap-2 rounded-t-lg"
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
            className="flex items-center text-base text-[#706F6F] p-4 border gap-2 rounded-b-lg"
          >
            <img src={instrgram} alt="" />
            Instagram
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-bold text-[#403F3F]">Q-Zone</h3>
        <div className="mx-auto flex flex-col gap-5">
          <img src={swimming} alt="" />
          <img src={Class} alt="" />
          <img src={playGround} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
