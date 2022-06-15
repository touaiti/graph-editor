import "./App.css";
import GGEditor, { Flow } from "gg-editor";
import CustomNode from "./shape/nodes/CustomNode";
import ImageNode from "./shape/nodes/ImageNode";
import CircleNode from "./shape/nodes/CircleNode";
import RectNode from "./shape/nodes/RectNode";
import data from './data.json';

function App() {
  return (
    <GGEditor className="editor" id="editor">
      <Flow className="flow" data={data} />
      <CircleNode />
      <CustomNode />
      <ImageNode />
      <RectNode />
    </GGEditor>
  );
}

export default App;
