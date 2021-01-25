import React, { useEffect, useState } from "react";
import CatCard from "../CatCard/CatCard";
import data from "../data/data";
import FavoriteCat from "../FavoriteCat/FavoriteCat";
import TotalCartNumber from '../TotalCartNumber/TotalCartNumber';
import TotalPrice from '../TotalPrice/TotalPrice';
const CatContainer = () => {
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    setCatData(data());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 className="text-center">Beautifull cats</h3>
        {catData
          .filter((catF) => catF.id < 5)
          .map((cat, index) => (
            <CatCard cat={cat} key={index} />
          ))}
      </div>
      <div className="mt-2 row">
        <div className="d-flex">
        <TotalCartNumber />
        <TotalPrice /> </div>
        <FavoriteCat />
      </div>
    </div>
  );
};
export default CatContainer;
