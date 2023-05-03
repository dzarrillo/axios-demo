import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GetData from "./pages/getdata/GetData";
import PostSkillsData from "./pages/postskillsdata/PostSkillsData";
import DeleteSkillsData from "./pages/deleteskillsdata/DeleteSkillsData";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/getdata" element={<GetData />} />
            <Route path="/postskillsdata" element={<PostSkillsData />} />
            <Route path="/deleteskillsdata" element={<DeleteSkillsData />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
