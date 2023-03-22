import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GetData from "./pages/getdata/GetData";
import PostSkillsData from "./pages/postskillsdata/PostSkillsData";
import DeleteSkillsData from "./pages/deleteskillsdata/DeleteSkillsData";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/getdata" element={<GetData />} />
          <Route path="/postskillsdata" element={<PostSkillsData />} />
          <Route path="/deleteskillsdata" element={<DeleteSkillsData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
