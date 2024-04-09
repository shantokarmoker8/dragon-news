import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="">
          <RightNav></RightNav>
        </div>
        <div className="lg:col-span-2 ">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} aNews={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <LeftNav></LeftNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
