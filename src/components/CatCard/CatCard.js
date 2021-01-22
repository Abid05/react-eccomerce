import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import addAction from "../../redux/actions/addAction";
const CatCard = ({ cat, addCat }) => {
  const [catArr, setCatArr] = useState([]);
  useEffect(() => {
    setCatArr(cat);
  }, []);

  return (
    <div className="col-md-3" key={cat.id}>
      <div className="card m-1 h-100">
        <div className="card-body">
          <h5 className="card-title">{cat.name}</h5>
          <img src={cat.img} width="100%" alt={cat.name} />
          <p className="card-text">{cat.company.catchPhrase}</p>
          <div className="d-flex justify-content-between align-items-center">
            <strong>Price</strong>
            <strong>{cat.price}</strong>
          </div>
          <button
            onClick={() => {
              addCat(cat);
            }}
            className="d-block mx-auto btn btn-primary"
          >
            Add Cat
          </button>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addCat: (cat) => {
    dispatch(addAction(cat));
  },
});

export default connect(null, mapDispatchToProps)(CatCard);
