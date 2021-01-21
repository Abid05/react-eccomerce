import React from "react";
import { connect } from "react-redux";

const FaverotRecipe = ({ checkTest, catImg }) => {
  console.log(catImg);
  const catchPhrase = checkTest && checkTest.company.catchPhrase;
  const gettingPrice =
    checkTest && checkTest.phone.split("-").join(" ").split("(");
  const gotPrice = checkTest && gettingPrice.toString().slice(0, 4);
  return (
    <div className="col-md-3" key={checkTest && checkTest.id}>
      {checkTest ? (
        <div className="card m-1 h-100">
          <img src={catImg} width="100%" alt={checkTest && checkTest.name} />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between">
              <span>Price</span>
              <span>{checkTest && gotPrice.replace(/\s/g, "")}</span>
            </h5>
            <span>{checkTest && checkTest.name}</span>
            <p className="card-text">{checkTest && catchPhrase}</p>
            <button href="#" className="btn btn-primary d-block mx-auto">
              Remove
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => ({
  checkTest: state.cat,
  catImg: state.img,
});
export default connect(mapStateToProps)(FaverotRecipe);
