import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
 const TotalPrice = ({catArr}) => { 
      let totalP = 0;
      catArr && catArr.map(cat => totalP += cat.price) 
     return (
         <h4 className="mx-2">{catArr && catArr.length > 0 ?   "Total Price:" : null }
         {totalP > 0 ? totalP : null}
        </h4>
    )
}
const mapStateToProps = state => ({
 catArr: state.cat
})
export default connect(mapStateToProps)(TotalPrice);