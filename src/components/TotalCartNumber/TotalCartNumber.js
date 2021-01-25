import React from 'react';
import {connect} from 'react-redux'; 
 const TotalCartNumber = ({TotalCartNumbers}) => {
    return (
         <>
        {TotalCartNumbers > 0 ? <h4 className="mx-2">Favorite Cats: <strong>{TotalCartNumbers}</strong></h4> : null}
    </>
    )
}
const mapStateToProps = state => ({
    TotalCartNumbers: state.cat.length
})
export default connect(mapStateToProps)(TotalCartNumber);