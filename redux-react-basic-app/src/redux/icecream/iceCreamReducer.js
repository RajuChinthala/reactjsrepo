import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState1 = {
  noOfIceCreams: 20,
};
const IceCreamReducer = (state = initialState1, action) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    }
    default:
      return state;
  }
};

export default IceCreamReducer;
