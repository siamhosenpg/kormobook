import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leftnav from "./components/layout/navigation/Leftnav";
import Nav from "./components/layout/navigation/Nav";
import Dashboard from "./pages/Dashboard";

import Members from "./pages/Members";
import Teams from "./pages/Teams";

import Projects from "./pages/Projects";

import Profie from "./pages/extrapage/Profie";
import Announcement from "./pages/Announcement";

function App() {
  return (
    <>
      <Router>
        <div className=" flex justify-between w-full ">
          <div className=" bg-background w-[350px] h-screen shrink-0 sticky top-0 border-r border-e-border-secondary">
            <Leftnav />
          </div>
          <div className=" w-full">
            <div className=" sticky  top-0">
              <Nav />
            </div>
            <div className="overflow-y-auto text-sm ">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employees" element={<Members />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/announcement" element={<Announcement />} />
                <Route path="/profile/:emp_id" element={<Profie />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
