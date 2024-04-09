import PropTypes from "prop-types";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
const NewsCard = ({ aNews }) => {
  const { author, details, title, thumbnail_url, rating, total_view } = aNews;
  return (
    <div className="border mb-8">
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
          <div className="flex gap-2">
            <Link>
              <FaRegBookmark></FaRegBookmark>
            </Link>
            <Link>
              <IoShareSocialOutline></IoShareSocialOutline>
            </Link>
          </div>
        </div>
        <div className="p-5">
          <h1 className="pb-5 text-base font-bold">{title}</h1>
          <img src={thumbnail_url} alt="" className="w-full" />
          <p className="text-base py-8 border-b">
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200)} <br />{" "}
                <Link className="text-[#F75B5F] font-semibold"> Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </p>
          <div className="flex justify-between pt-5">
            <div className="flex items-center gap-2">
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div className="text-base">{rating.number}</div>
            </div>
            <div className="flex items-center text-base gap-2">
              <IoEyeSharp></IoEyeSharp> {total_view}
            </div>
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
