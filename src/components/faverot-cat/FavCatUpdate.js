import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {removeCat} from '../../redux-store/actions/removeCat';

const FavCatUpdate = ({ catObj, removeCat, catImg }) => { 
  const catchPhrase = catObj && catObj.company.catchPhrase;
  const gettingPrice =
    catObj && catObj.phone.split("-").join(" ").split("(");
  const gotPrice = catObj && gettingPrice.toString().slice(0, 4);
  return (
    <>
      {catObj ? (
    <div className="col-md-3" key={catObj && catObj.id}>
        <div className="card m-1 h-100">
          <img src={catImg} width="100%" alt={catObj && catObj.name} />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between">
              <span>Price</span>
              <span>{catObj && gotPrice.replace(/\s/g, "")}</span>
            </h5>
            <span>{catObj && catObj.name}</span>
            <p className="card-text">{catObj && catchPhrase}</p>
            <button href="#" onClick={() => {removeCat(catObj)}} className="btn btn-primary d-block mx-auto">
              Remove
            </button>
          </div>
        </div>
        </div>
      ) : null}
        </>
      );
};
const mapStateToProps = (state) => ({
  catObj: state.cat,
  catImg: state.img,
});
const mapDispatchToProps = dispatch => ({
    removeCat: () =>{
        dispatch(removeCat())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(FavCatUpdate);
