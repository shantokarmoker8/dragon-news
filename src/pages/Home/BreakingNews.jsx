import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-4 my-8 gap-5">
      <button className="btn bg-[#D72050] rounded-none hover:bg-red-500 text-white">
        Latest
      </button>
      <Marquee>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
