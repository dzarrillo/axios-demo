import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GetData from "./pages/getdata/GetData";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/getdata" element={<GetData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
