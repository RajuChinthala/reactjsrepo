import React from "redux";
import { connect } from "react-redux";
import buyIceCream from "../redux/icecream/iceCreamActions.js";

function IceCreamContainer(props) {
  return (
    <div>
      <h1> Single Order: Icecreams available : {props.noOfIceCreams} </h1>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapPropsToState1 = (state) => {
  return {
    noOfIceCreams: state.iceCream.noOfIceCreams,
  };
};
const mapPropsToDispatch1 = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(
  mapPropsToState1,
  mapPropsToDispatch1
)(IceCreamContainer);
