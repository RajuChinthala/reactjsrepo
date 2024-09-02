import "./App.css";
import ArtistComponent from "./ArtistComponent.js";
import DeleteArtistComponent from "./DeleteArtistComponent.js";
import ShapeEditor from "./ShapeEditor.js";
import ArraySliceComponent from "./ArraySliceComponent.js";

function App() {
  return (
    <div className="App">
      <ArtistComponent />
      <br />
      <DeleteArtistComponent />
      <br />
      <div className="App">
        <ShapeEditor />
      </div>
      <div>
        <ArraySliceComponent />
      </div>
    </div>
  );
}

export default App;
