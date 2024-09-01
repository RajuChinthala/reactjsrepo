import React from "redux";
import { connect } from "react-redux";
import buyIceCream from "../redux/icecream/iceCreamActions.js";
import { useState } from "react";

function IceCreamContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>Multi Order: icecreams available : {props.noOfIceCreams} </h1>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyIceCream(number)}>
        Buy {number} IceCream
      </button>
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
    buyIceCream: (number) => dispatch(buyIceCream(number)),
  };
};

export default connect(
  mapPropsToState1,
  mapPropsToDispatch1
)(IceCreamContainer);
