import Home from "./Components/Home/Home.js";
import Classes from "./Components/Classes/Classes.js";
import { Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </div>
  );
}

export default App;
