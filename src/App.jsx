import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SmartAttendance from "./pages/SmartAttendance/SmartAttendance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="smartAttendance" element={<SmartAttendance />} />
      </Routes>
    </>
  );
}

export default App;
