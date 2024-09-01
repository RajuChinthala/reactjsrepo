import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer.js";
import HooksCakeContainer from "./components/HooksCakeContainer.js";
import IceCreamContainer from "./components/IceCreamContainer.js";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer.js";
import MultiCakeContainer from "./components/MultiCakeContainer.js";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <br />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <MultiCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
