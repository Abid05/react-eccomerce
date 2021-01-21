import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { myAction } from "../../redux-store/actions/actions";
import axios from "axios";
const CatCard = ({ addCat }) => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setCats(data.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {cats.slice(0, 4).map((cat) => {
          const catchPhrase = cat.company.catchPhrase;
          const gettingPrice = cat.phone.split("-").join(" ").split("(");
          const gotPrice = gettingPrice
            .toString()
            .replace(",", cat.id)
            .slice(0, 4);

          return (
            <div className="col-md-3" key={cat.id}>
              <div className="card m-1 h-100">
                <img
                  src={`https://source.unsplash.com/200x100/?cats/${cat.name}`}
                  width="100%"
                  alt={cat && cat.name}
                />
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    <span>Price</span>
                    <span>{gotPrice.replace(/\s/g, "")}</span>
                  </h5>
                  <span>{cat.name}</span>
                  <p className="card-text">{catchPhrase}</p>
                  <button
                    href="#"
                    onClick={() => {
                      addCat(
                        cat,
                        `https://source.unsplash.com/200x100/?cats/${cat.name}`
                      );
                    }}
                    className="btn btn-primary d-block mx-auto"
                  >
                    Add to list
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  testAbc: state.cat,
});

const mapDispatchToProps = (dispatch) => ({
  addCat: (cat, catImg) => dispatch(myAction(cat, catImg)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CatCard);
