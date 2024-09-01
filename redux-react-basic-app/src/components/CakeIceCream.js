const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Initial cake",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Initial icecream",
  };
}

const initialCakeState = {
  noOfCakes: 10,
};

const initialIceCreamState = {
  noOfIceCreams: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(reducer);
console.log("Initial stage", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("update state", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
