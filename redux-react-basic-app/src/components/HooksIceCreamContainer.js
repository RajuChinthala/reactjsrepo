import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyIceCream from "../redux/icecream/iceCreamActions.js";

function HooksIceCreamContainer() {
  const noOfIceCreams = useSelector((state) => state.iceCream.noOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Hook: icecreams available: {noOfIceCreams}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
