import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={() => navigate("post")}>go post</button>
    </div>
  );
}

export default App;
