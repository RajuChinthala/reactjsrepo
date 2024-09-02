import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer.js";
import HooksCakeContainer from "./components/HooksCakeContainer.js";
import IceCreamContainer from "./components/IceCreamContainer.js";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer.js";
import MultiCakeContainer from "./components/MultiCakeContainer.js";
import store from "./redux/store.js";
import MultiIceCreamContainer from "./components/MultiIceCreamContainer.js";
import ItemContainer from "./components/ItemContainer.js";
import UserContainer from "./components/UserContainer.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />

        <MultiCakeContainer />
        <MultiIceCreamContainer />
        <ItemContainer cake />
        <ItemContainer />

        <br />

        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
