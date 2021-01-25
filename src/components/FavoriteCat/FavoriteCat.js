import { connect } from "react-redux";
import React, {useState} from "react";
import removeAction from "../../redux/actions/removeAction";
const FavoriteCat = ({favCat, removeCat, quantity}) => { 
  return (
    <>
      {favCat &&
        favCat &&
        favCat.map((cat, index) => (
          <div className="col-md-3 px-0" key={index}>
            <div className="card h-100 m-1">
              <div className="card-body d-flex justify-content-between flex-column">
                <div className="d-flex justify-content-between align-items-center"><h5 className="card-title">{cat && cat.name}</h5><span>Quantity: {quantity}</span></div>                
              <img
                src={cat && cat.img}
                className="card-img-top"
                alt={cat && cat.name}
              />
                <div className="d-flex justify-content-between align-items-center">
            <strong>Price</strong>
            <strong>{cat.price}</strong>
          </div>
                <button 
                onClick={() => { 
                  removeCat(index);
                }} 
                  className="btn btn-primary"
                >
                  Remove Cat
                </button>
              </div>
            </div>
          </div>
        ))}{" "}
    </>
  );
};

const mapStateToProps = (state) => ({
  favCat: state.cat,
  quantity: state.quantity
});
 
const mapDispatchToProps = dispatch => ({
  removeCat: (cat) => {
    dispatch(removeAction(cat))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCat);
