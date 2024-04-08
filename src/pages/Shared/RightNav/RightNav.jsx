import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold">All Caterogy</h2>
      <div className="flex flex-col  ">
        {categories.map((category) => (
          <Link key={category.id} className="hover:bg-[#E7E7E7] px-12 py-4">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RightNav;
