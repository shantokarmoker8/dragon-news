import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="lg:grid grid-cols-4">
        <div className="col-span-3">
          <h2>newsx</h2>
          <p>{id}</p>
        </div>
        <div className="col-span-1">
          <LeftNav></LeftNav>
        </div>
      </div>
    </div>
  );
};

export default News;
