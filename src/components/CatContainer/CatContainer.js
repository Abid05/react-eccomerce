import React, { useEffect, useState } from "react";
import CatCard from "../CatCard/CatCard";
import data from "../data/data";
import FavoriteCat from "../FavoriteCat/FavoriteCat";
const CatContainer = () => {
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    setCatData(data());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center">Beautifull cats</h3>
        {catData
          .filter((catF) => catF.id < 5)
          .map((cat) => (
            <CatCard cat={cat} key={cat.id} />
          ))}
      </div>
      <div className="mt-2 row">
        <FavoriteCat />
      </div>
    </div>
  );
};
export default CatContainer;
