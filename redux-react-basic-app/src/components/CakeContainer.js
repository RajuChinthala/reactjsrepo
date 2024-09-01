import React from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeActions.js";

function CakeContainer(props) {
  return (
    <div>
      <h1> No of cakes available:{props.noOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapPropsToState, mapPropsToDispatch)(CakeContainer);
