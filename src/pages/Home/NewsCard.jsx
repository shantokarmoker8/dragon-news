import PropTypes from "prop-types";
import { IoShareSocialOutline } from "react-icons/io5";

import { FaRegBookmark } from "react-icons/fa6";
const NewsCard = ({ aNews }) => {
  const { author, title } = aNews;
  return (
    <div>
      <div>
        <div className="flex justify-between items-center p-5 bg-[#F3F3F3]">
          <div className="flex gap-4 ">
            <div>
              <img src={author.img} alt="" className="w-10 rounded-full" />
            </div>
            <div>
              <h2 className="text-base font-semibold">{author.name}</h2>
              <p className="text-sm text-[#706F6F]">{author.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <IoShareSocialOutline></IoShareSocialOutline>
          </div>
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  aNews: PropTypes.object,
};
export default NewsCard;
