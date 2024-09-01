import React, { useState } from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeActions.js";
import buyIceCream from "../redux/icecream/iceCreamActions.js";

function ItemContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>
        {""}
        Buy Dynamic: {props.itemtype} available :{props.itemCount}
      </h1>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyItem(number)}>Buy {number} Item</button>
    </div>
  );
}

const mapPropsToState = (state, ownProp) => {
  const itemCount = ownProp.cake
    ? state.cake.noOfCakes
    : state.iceCream.noOfIceCreams;
  const itemtype = ownProp.cake ? "cakes" : "itemcreams";

  return {
    itemCount: itemCount,
    itemtype: itemtype,
  };
};
const mapPropsToDispatch = (dispatch, ownProp) => {
  const dispatchFunc = (number) => {
    ownProp.cake ? dispatch(buyCake(number)) : dispatch(buyIceCream(number));
  };
  return {
    buyItem: dispatchFunc,
  };
};

export default connect(mapPropsToState, mapPropsToDispatch)(ItemContainer);
