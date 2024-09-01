import { BUY_ICECREAM } from "./iceCreamTypes";

const buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};

export default buyIceCream;
