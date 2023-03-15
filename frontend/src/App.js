import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GetData from "./pages/getdata/GetData";
import PostSkillsData from "./pages/postskillsdata/PostSkillsData";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/getdata" element={<GetData />} />
          <Route path="/postskillsdata" element={<PostSkillsData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
