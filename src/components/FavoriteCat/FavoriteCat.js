import { connect } from "react-redux";
import React from "react";
import removeAction from "../../redux/actions/removeAction";
const FavoriteCat = (favCat, remCat) => {
  return (
    <>
      {favCat &&
        favCat.favCat &&
        favCat.favCat.map((cat) => (
          <div className="col-md-3" key={cat && cat.id}>
            <div className="card h-100 m-1">
              <img
                src={cat && cat.img}
                className="card-img-top"
                alt={cat && cat.name}
              />
              <div className="card-body">
                <h5 className="card-title">{cat && cat.name}</h5>
                <p className="card-text">{cat && cat.price}.</p>
                <a
                  onClick={() => {
                    remCat(favCat);
                  }}
                  href="#"
                  className="btn btn-primary"
                >
                  Remove Cat
                </a>
              </div>
            </div>
          </div>
        ))}{" "}
    </>
  );
};

const mapStateToProps = (state) => ({
  favCat: state.cat,
});
const mapDispatchToProps = (dispatch) => ({
  remCat: (id) => {
    dispatch(removeAction(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCat);
