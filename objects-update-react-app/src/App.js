import "./App.css";
import SpreadOperatorContainer from "./spreadex/SpreadOperatorContainer.js";
import ImmerContainer from "./immerex/ImmerContainer.js";
import Scoreboard from "./issuefixex/ScoreBoard.js";
import BackgroundChange from "./issuefixex/BackgroundChange.js";
import ImmerBackgrounChange from "./issuefixex/ImmerBackgrounChange.js";

function App() {
  return (
    <>
      {/* <div className="App">
        <Scoreboard />
      </div>
      <div className="App">
        <h1>Spread operators</h1>
        <SpreadOperatorContainer />
      </div>
      <div className="App">
        <h1>Immer Example</h1>
        <ImmerContainer />
      </div> */}

      <div className="App">
        <BackgroundChange />
      </div>
      <br />
      <div className="App">
        <ImmerBackgrounChange />
      </div>
    </>
  );
}

export default App;
