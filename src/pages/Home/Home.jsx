import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-3xl font-poppins">this home</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="border">
          <RightNav></RightNav>
        </div>
        <div className="lg:col-span-2 border">
          <h2 className="text-3xl">news</h2>
        </div>
        <div className="border">
          <LeftNav></LeftNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
