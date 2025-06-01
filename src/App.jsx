import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SmartAttendance from "./pages/SmartAttendance/SmartAttendance";
import GenAIPlatform from "./pages/GenAIPlatform/GenAIPlatform";
import SmartPermit from "./pages/SmartPermit/SmartPermit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="smartAttendance" element={<SmartAttendance />} />
        <Route path="genAIPlatform" element={<GenAIPlatform />} />
        <Route path="smartPermit" element={<SmartPermit />} />
      </Routes>
    </>
  );
}

export default App;
