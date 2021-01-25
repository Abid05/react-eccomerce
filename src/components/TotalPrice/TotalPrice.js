import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
 const TotalPrice = ({catArr}) => { 
     let totalP = 0;
     return (
         <h4 className="mx-2">{catArr.length > 0 ?   "Total Price:" : null } 
        {catArr && catArr.map((cat, index) =>{ 
          totalP += Number(cat.price);
          return totalP;
           })}
        </h4>
    )
}
const mapStateToProps = state => ({
 catArr: state.cat
})
export default connect(mapStateToProps)(TotalPrice);