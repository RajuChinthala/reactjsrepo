import React, { useState } from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeActions.js";

function MultiCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1> Multi Order: cakes available:{props.noOfCakes}</h1>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapPropsToState = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};
const mapPropsToDispatch = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapPropsToState, mapPropsToDispatch)(MultiCakeContainer);
